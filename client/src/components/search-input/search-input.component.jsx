import React from "react";

import {
  SearchGroupContainer,
  SearchInputContainer,
  SearchInputLabel
} from "./search-input.style";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchInput = ({ label, handleChange, ...props }) => {
  return (
    <SearchGroupContainer>
      <SearchIcon style={{ width: "20px", height: "20px" }} />
      {/* <div className="icon icon-search" /> */}
      <SearchInputContainer onChange={handleChange} {...props} />
      {label ? (
        <SearchInputLabel className={props.value.length ? "shrink" : ""}>
          {label}
        </SearchInputLabel>
      ) : null}
    </SearchGroupContainer>
  );
};

export default SearchInput;
