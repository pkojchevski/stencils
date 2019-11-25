import React from "react";

import { connect } from "react-redux";
import { signoutStart } from "../../redux/user/user.actions";
import { ReactComponent as SignoutIcon } from "../../assets/icons/signout.svg";
import "./avatar.styles.scss";

const Avatar = ({ initials, signoutStart }) => {
  const handleAvatarClick = () => {
    signoutStart();
  };
  return (
    <div className="avatar-wrapper" onClick={() => handleAvatarClick()}>
      <div className="avatar-circle">
        <span className="avatar-initials">{initials}</span>
      </div>
      <SignoutIcon className="signout-icon" style={{ width: "25px" }} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signoutStart: () => dispatch(signoutStart())
});

export default connect(null, mapDispatchToProps)(Avatar);
