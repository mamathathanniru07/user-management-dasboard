import "./index.css";

const UserCard = (props) => {
  const { user, deleteUser = () => {}, editUser = () => {} } = props;
  const { id, name, email, website } = user;

  return (
    <li className="user-list-item">
      <div className="field-container">
        <p className="label-field">Id:</p> <p>{id}</p>
      </div>
      <div className="field-container">
        <p className="label-field">Name:</p> <p>{name}</p>
      </div>
      <div className="field-container">
        <p className="label-field">Email:</p> <p>{email}</p>
      </div>
      <div className="field-container">
        <p className="label-field">Website:</p> <p>{website}</p>
      </div>
      <div>
        <button onClick={() => editUser(user)}>Edit</button>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
    </li>
  );
};

export default UserCard;
