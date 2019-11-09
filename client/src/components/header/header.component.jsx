import React, { useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list.svg";

const Header = ({ path }) => {
  useEffect(() => {
    if (path === "/table" || path === "/") {
      setListToggle(true);
    }
    if (path === "/search") {
      setSearchToggle(true);
    }
  }, []);
  const [searchToggle, setSearchToggle] = useState(false);
  const [listToggle, setListToggle] = useState(false);

  const scaleSearch = useSpring({
    transform: searchToggle ? "scale(1.2)" : "scale(1)"
  });
  const scaleList = useSpring({
    transform: listToggle ? "scale(1.2)" : "scale(1)"
  });

  const handleListClick = () => {
    setListToggle(!listToggle);
    setSearchToggle(false);
  };

  const handleSearchClick = () => {
    setListToggle(false);
    setSearchToggle(!searchToggle);
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
    </div>
  );
};

export default Header;
