import React, { useState } from "react";
import { connect } from "react-redux";

import "./signin.styles.scss";
import FormInput from "../../components/form-input/form-input.component";

import { signinStart } from "../../redux/user/user.actions";

export const SigninPage = ({ signinStart }) => {
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
            required
          />
          <FormInput
            name="password"
            type="password"
            onChange={e => handleChange(e)}
            value={credentials.password}
            label="password"
            required
          />
          <button type="submit" className="form-signin-button">
            signin
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signinStart: username => dispatch(signinStart(username))
});

export default connect(null, mapDispatchToProps)(SigninPage);
