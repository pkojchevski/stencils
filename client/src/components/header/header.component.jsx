import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";
import { ReactComponent as SigninIcon } from "../../assets/icons/signin.svg";
import { createStructuredSelector } from "reselect";
import { selectIsAuth, selectInitials } from "../../redux/user/user.selector";
import { signoutStart } from "../../redux/user/user.actions";
import Avatar from "../avatar/avatar.component";

const Header = ({ path, isAuth, initials }) => {
  useEffect(() => {
    if (path === "/table" || path === "/") {
      setListToggle(true);
    }
    if (path === "/search") {
      setSearchToggle(true);
    }
    if (path === "/signin") {
      setSigninToggle(true);
    }
  }, []);
  const [searchToggle, setSearchToggle] = useState(false);
  const [listToggle, setListToggle] = useState(false);
  const [signinToggle, setSigninToggle] = useState(false);

  const scaleSearch = useSpring({
    transform: searchToggle ? "scale(1.2)" : "scale(1)"
  });
  const scaleList = useSpring({
    transform: listToggle ? "scale(1.2)" : "scale(1)"
  });

  const scaleSignin = useSpring({
    transform: signinToggle ? "scale(1.2)" : "scale(1)"
  });

  const handleListClick = () => {
    setListToggle(!listToggle);
    setSearchToggle(false);
    setSigninToggle(false);
  };

  const handleSearchClick = () => {
    setListToggle(false);
    setSearchToggle(!searchToggle);
    setSigninToggle(false);
  };

  const handleSigninClick = () => {
    setListToggle(false);
    setSearchToggle(false);
    setSigninToggle(!signinToggle);
  };

  const handleAvatarClick = () => {
    console.log("handleSignout");
    signoutStart();
  };

  return (
    <div className="header">
      <h3 style={{ marginRight: "auto", marginLeft: "10px" }}>Szablony</h3>
      <Link to="/table" className="header-item">
        <animated.div style={scaleList}>
          <ListIcon onClick={handleListClick} style={{ width: "25px" }} />
        </animated.div>
      </Link>
      <Link to="/search" className="header-item">
        <animated.div style={scaleSearch}>
          <SearchIcon onClick={handleSearchClick} style={{ width: "25px" }} />
        </animated.div>
      </Link>
      {isAuth ? (
        <Avatar initials={initials} />
      ) : (
        <Link to="/signin" className="header-item">
          <animated.div style={scaleSignin}>
            <SigninIcon onClick={handleSigninClick} style={{ width: "25px" }} />
          </animated.div>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  initials: selectInitials
});

export default connect(mapStateToProps)(Header);
