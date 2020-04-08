import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import AuthForm from "./AuthForm";
import { setToken } from "../../api/apiConfig";

class AuthFormContainer extends PureComponent {
  state = {
    email: "",
    password: "",
    rememberMe: false,
    errors: {
      fields: null,
      message: "",
    },
  };

  handleInputChange = ({ target: { name, value, checked } }) => {
    const val = name === "rememberMe" ? checked : value;

    this.setState((prevState) => ({
      [name]: val,
      errors: {
        message: "",
        fields: prevState.errors.fields
          ? {
              ...prevState.errors.fields,
              [name]: null,
            }
          : null,
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;
    this.props
      .handleFormRequest({ email, password, rememberMe })
      .then((res) => {
        const token = res.data.token;
        setToken(token);
        this.props.history.push("/tasks");
      })
      .catch((err) => {
        if (err?.response?.data)
          this.setState({
            errors: err.response.data,
          });
      });
  };

  render() {
    return (
      <AuthForm
        {...this.props}
        {...this.state}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default withRouter(AuthFormContainer);
