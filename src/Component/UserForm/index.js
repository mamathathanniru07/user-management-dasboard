import { Component } from "react";
import FormField from "../FormInput";
import "./index.css";

class UserForm extends Component {
  state = { name: "", email: "", website: "" };

  onChangeField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (e.target.form.reportValidity()) {
      const { onSubmitForm } = this.props;
      onSubmitForm(this.state);
    }
  };

  render() {
    const { onSubmitForm, onPressClose, edit } = this.props;
    return (
      <form className="form-container" onSubmit={onSubmitForm}>
        <button type="button" className="close-btn" onClick={onPressClose}>
          Close
        </button>
        <FormField
          name={"name"}
          label={"Name"}
          onChange={this.onChangeField}
          required={true}
          type={"text"}
        />
        <FormField
          name={"email"}
          label={"Email"}
          onChange={this.onChangeField}
          required={true}
          type={"email"}
        />
        <FormField
          name={"website"}
          label={"Website"}
          onChange={this.onChangeField}
          required={true}
          type={"url"}
        />
        <button type="submit" onClick={this.submitForm}>
          {edit ? "Update" : "Add"}
        </button>
      </form>
    );
  }
}

export default UserForm;
