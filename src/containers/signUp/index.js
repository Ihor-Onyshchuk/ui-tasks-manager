import React, { PureComponent } from "react";
import Auth from "../../components/auth/Auth";
import axios from "axios";

export default class SignUp extends PureComponent {
  state = {
    email: "",
    password: "",
    errors: {
      fields: null,
      message: ""
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      [name]: value,
      errors: {
        message: "",
        fields: prevState.errors.fields
          ? {
              ...prevState.errors.fields,
              [name]: null
            }
          : null
      }
    }));
  };

  handleSignUpSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post("https://testapi.doitserver.in.ua/api/users", { email, password })
      .then(res => {
        localStorage.setItem("user-token", res.data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        this.props.history.push("/tasks");
      })
      .catch(err => {
        if (err?.response?.data)
          this.setState({
            errors: err.response.data
          });
      });
  };

  render() {
    const { errors, email, password } = this.state;
    return (
      <Auth
        title="Sign Up"
        submitButtonName="Sign Up"
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSignUpSubmit}
        errors={errors}
        email={email}
        password={password}
      />
    );
  }
}
