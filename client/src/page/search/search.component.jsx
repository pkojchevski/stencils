import React from "react";
import AbsoluteWrapper from "../search/search.component";

import "./search.styles.scss";

const SearchPage = () => (
  <div className="search-absolute-wrapper">
    <div className="search-page">
      {/* <div className="search-page-title">Szukaj szablony</div> */}
      <div className="search-page-content">
        <input></input>
        <div className="search-page-content-result">
          <h2>A1234</h2>
        </div>
      </div>
    </div>
  </div>
);

export default SearchPage;
