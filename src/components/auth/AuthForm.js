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
    <div className="container text-left">
      <div className="row justify-content-center">
        <form
          onSubmit={handleFormSubmit}
          className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 p-5 mt-5 rounded shadow-lg"
        >
          <legend className="mt-5 mb-4 font-weight-bold text-center">
            {title}
          </legend>

          <div className="form-row">
            <div className="col-12 mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              {errors?.fields?.email && (
                <p className="invalid-feedback d-block text-left">
                  {errors.fields.email[0]}
                </p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="col-12 mb-1">
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              {errors?.fields?.password && (
                <p className="invalid-feedback d-block text-left">
                  {errors.fields.password[0]}
                </p>
              )}
            </div>
          </div>

          {showRememberMe && (
            <div className="custom-control custom-switch">
              <input
                className="custom-control-input"
                type="checkbox"
                name="rememberMe"
                id="customSwitch1"
                checked={rememberMe}
                onChange={handleInputChange}
              />
              <label
                className="mt-3 custom-control-label text-muted"
                for="customSwitch1"
              >
                Remember me:
              </label>
            </div>
          )}

          {errors.message && (
            <p className="invalid-feedback d-block text-left">
              {errors.message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-success btn-lg col-12 p-1 mt-4 mb-5"
          >
            {submitButtonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
