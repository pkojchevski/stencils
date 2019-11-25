import React, { useState } from "react";
import { connect } from "react-redux";

import classnames from "classnames";

import "./signin.styles.scss";
import FormInput from "../../components/form-input/form-input.component";

import { signinStart } from "../../redux/user/user.actions";

import {
  selectCurrentUser,
  selectErrors
} from "../../redux/user/user.selector";

import { createStructuredSelector } from "reselect";

export const SigninPage = ({ signinStart, currentUser, error }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    signinStart(credentials);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="signin-page-absolute-wrapper">
      <div className="signin-form-page">
        <form onSubmit={handleSubmit} className="form-signin">
          <FormInput
            name="username"
            type="text"
            onChange={e => handleChange(e)}
            value={credentials.username}
            label="username"
            error={error ? error.username : ""}
          />

          <FormInput
            name="password"
            type="password"
            onChange={e => handleChange(e)}
            value={credentials.password}
            label="password"
            error={error ? error.password : ""}
          />
          <button type="submit" className="form-signin-button">
            signin
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectErrors
});

const mapDispatchToProps = dispatch => ({
  signinStart: username => dispatch(signinStart(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
