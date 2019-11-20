import React, { useState } from "react";

import "./search.styles.scss";

import { connect } from "react-redux";
import { getSzablonForPcbStart } from "../../redux/szablon/szablon.action";
import Position from "../../components/position/position.component";

const SearchPage = ({ getSzablonForPcbStart }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = e => {
    const { value } = e.target;
    setInputValue(value);
    getSzablonForPcbStart(value);
    setInputValue("");
  };

  return (
    <div className="search-absolute-wrapper">
      <div className="search-page">
        {/* <div className="search-page-title">Szukaj szablony</div> */}
        <div className="search-page-content">
          <input
            type="text"
            autoFocus={true}
            onChange={e => handleOnChange(e)}
            value={inputValue}
          ></input>
          <div className="search-page-content-result">
            <Position />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getSzablonForPcbStart: pcb => dispatch(getSzablonForPcbStart(pcb))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchPage);
