import React from "react";

const Auth = ({
  onInputChange,
  onSubmit,
  submitButtonName,
  title,
  showRememberMe = false,
  rememberMe = false,
  email,
  password,
  errors
}) => (
  <form onSubmit={onSubmit}>
    <legend>{title}</legend>
    <br />
    <label>email</label>
    <br />
    <input type="email" name="email" value={email} onChange={onInputChange} />
    <br />
    {errors?.fields?.email && <p>{errors.fields.email[0]}</p>}
    <label>password</label>

    {showRememberMe && (
      <input
        type="checkbox"
        name="rememberMe"
        checked={rememberMe}
        onChange={onInputChange}
      >
        remember me
      </input>
    )}
    <br />
    <input
      type="password"
      name="password"
      value={password}
      onChange={onInputChange}
    />
    <br />
    {errors?.fields?.password && <p>{errors.fields.password[0]}</p>}
    {errors.message && <p>{errors.message}</p>}
    <button type="submit">{submitButtonName}</button>
  </form>
);

export default Auth;
