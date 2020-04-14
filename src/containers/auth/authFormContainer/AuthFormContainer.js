import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { setToken } from "../../../api/apiConfig";
import { setUserAuth } from "../../../actions/index";
import { connect } from "react-redux";
import AuthForm from "../../../components/auth/AuthForm";

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
        setToken(res.data.token);
        this.props.setUserAuth();
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

const mapStateToProps = ({ isAuth }) => ({
  isAuth,
});

const mapDispatchToProps = {
  setUserAuth: setUserAuth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthFormContainer));
