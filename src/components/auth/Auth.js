import React from "react";
import "./Auth.scss";

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
  <div className="container text-left">
    <div className="row justify-content-center">
      <form
        onSubmit={onSubmit}
        className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 p-5 mt-5 rounded shadow-lg"
      >
        <legend className="mt-5 mb-4 font-weight-bold text-center">
          {title}
        </legend>

        <div class="form-row">
          <div class="col-12 mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Email"
            />
            {errors?.fields?.email && (
              <p className="invalid-feedback d-block text-left">
                {errors.fields.email[0]}
              </p>
            )}
          </div>
        </div>

        {/* {showRememberMe && (
        <input
          type="checkbox"
          name="rememberMe"
          checked={rememberMe}
          onChange={onInputChange}
        >
          remember me
        </input>
      )} */}

        <div className="form-row">
          <div className="col-12 mb-1">
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Password"
            />
            {errors?.fields?.password && (
              <p className="invalid-feedback d-block text-left">
                {errors.fields.password[0]}
              </p>
            )}
          </div>
        </div>

        {/* <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1">
  <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
</div> */}

        <div className="custom-control custom-switch">
          <label className="mt-3 custom-control-label text-muted">
            Remember me:
            <input
              className="custom-control-input"
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={onInputChange}
            />
          </label>
        </div>

        {errors.message && (
          <p className="invalid-feedback d-block text-left">{errors.message}</p>
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
export default Auth;
