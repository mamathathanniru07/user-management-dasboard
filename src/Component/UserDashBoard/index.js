import { Component } from "react";
import {
  ApiMethods,
  ApiRequest,
  ApiStatusCodes,
} from "../../Services/ApiUtils";
import { ApiUrlConstants } from "../../Services/ApiConstants";
import UserCard from "../UserCard";
import "./index.css";
import UserForm from "../UserForm";
import Pagination from "../PaginationComponent";

class UserDashBoard extends Component {
  state = {
    userList: [],
    openForm: false,
    isEdit: false,
    editUserData: {},
    pages: [],
    currentPage: 0,
  };

  componentDidMount() {
    const options = {
      method: ApiMethods.get,
    };
    ApiRequest(
      { path: ApiUrlConstants.user, options },
      async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          this.setState({ userList: data });
          this.updatePagination(data.length ?? 1);
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  deleteUser = (id) => {
    const options = { method: ApiMethods.delete };
    ApiRequest(
      { path: `${ApiUrlConstants.user}/${id}`, options },
      async (res) => {
        if (res.status === ApiStatusCodes.success) {
          this.setState((prev) => ({
            userList: prev.userList.filter((user) => user?.id !== id),
          }));
          this.updatePagination(this.state.userList.length - 1);
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
  };

  editUser = (data) => {
    this.setState({ isEdit: true, editUserData: data, openForm: true });
  };

  updateOrAdduser = (data) => {
    const { isEdit, userList } = this.state;

    let options = { method: ApiMethods.put };
    if (!isEdit) {
      options = { method: ApiMethods.post, body: data };
    }
    ApiRequest(
      {
        path: `${ApiUrlConstants.user}${
          isEdit ? "/" + this.state.editUserData.id : ""
        }`,
        options,
      },
      async (res) => {
        if (
          res.status === ApiStatusCodes.success ||
          res.status === ApiStatusCodes.created
        ) {
          if (this.state.isEdit) {
            let newUserList = this.state.userList.map((each) => {
              if (each?.id === this.state.editUserData.id) {
                return { ...each, ...data };
              }
              return each;
            });

            this.setState({
              isEdit: false,
              userList: newUserList,
              openForm: false,
            });
            this.updatePagination(newUserList.length);
          } else {
            this.setState((prev) => ({
              openForm: false,
              isEdit: false,
              userList: [
                ...prev.userList,
                { ...data, id: String(this.state.userList.length + 1) },
              ],
            }));
            this.updatePagination(userList.length + 1);
          }
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
  };

  closeDialog = (e) => {
    e.stopPropagation();
    this.setState({ openForm: false });
  };

  addUser = (e) => {
    e.stopPropagation();
    this.setState({ openForm: true, isEdit: false });
  };

  onPressNextPage = () => {
    this.setState((prev) => ({ currentPage: prev.currentPage + 1 }));
  };

  onPressPrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage === 0) {
      return;
    }
    this.setState((prev) => ({ currentPage: prev.currentPage - 1 }));
  };

  goToPageNum = (page) => {
    this.setState({ currentPage: page });
  };

  updatePagination = (data) => {
    let pages = [];
    for (let i = 0; i < data / 5; i++) {
      pages.push(i);
    }
    this.setState({ pages });
  };

  render() {
    const { userList, openForm, isEdit, editUserData, pages, currentPage } =
      this.state;
    const count = currentPage + currentPage * 4;
    const pageUsers = userList.slice(count, count + 5);
    return (
      <div className="dashboard-container">
        <h1>Welcome To User Management DashBoard</h1>
        <button onClick={this.addUser}>Add User</button>
        <ul className="user-list-container">
          {pageUsers.map((each, index) => {
            return (
              <UserCard
                user={each}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
                key={"user-card" + index}
              />
            );
          })}
        </ul>
        <Pagination
          pages={pages}
          current={currentPage}
          onClickNext={this.onPressNextPage}
          onClickPrev={this.onPressPrevPage}
          goToPage={this.goToPageNum}
        />
        <dialog open={openForm} className="dialog">
          {openForm && (
            <UserForm
              data={editUserData}
              edit={isEdit}
              open={openForm}
              onSubmitForm={this.updateOrAdduser}
              onPressClose={this.closeDialog}
            />
          )}
        </dialog>
      </div>
    );
  }
}

export default UserDashBoard;
