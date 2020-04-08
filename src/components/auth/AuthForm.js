import React from "react";
import Checkbox from "../common/checkbox/Checkbox";

const AuthForm = (props) => {
  const {
    handleFormSubmit,
    handleInputChange,
    title,
    submitButtonName,
    errors,
    email,
    password,
    rememberMe,
    showRememberMe,
  } = props;
  return (
    <form onSubmit={handleFormSubmit}>
      <legend>{title}</legend>
      <br />
      <label>email</label>
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <br />
      {errors?.fields?.email && <p>{errors.fields.email[0]}</p>}
      <label>password</label>
      <br />
      {showRememberMe && (
        <label>
          remember me:
          <Checkbox
            checked={rememberMe}
            onChange={handleInputChange}
            name="rememberMe"
          />
        </label>
      )}
      <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <br />
      {errors?.fields?.password && <p>{errors.fields.password[0]}</p>}
      {errors.message && <p>{errors.message}</p>}
      <button type="submit">{submitButtonName}</button>
    </form>
  );
};

export default AuthForm;
