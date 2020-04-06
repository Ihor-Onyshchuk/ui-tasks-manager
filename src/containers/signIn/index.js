import React, { PureComponent } from "react";

export default class SignIn extends PureComponent {
  state = {
    error: false
  };

  render() {
    return <div>sign in</div>;
  }
}

// handleInputChange = ({ target }) => {
//   const { name } = target;
//   const value = name === "rememberMe" ? target.checked : target.value;

//   this.setState({
//     [name]: value
//   });
// };