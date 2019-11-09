import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsSzablonyLoaded } from "../../redux/szablon/szablon.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

import SzablonTable from "./szablon-table.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsSzablonyLoaded(state)
});

const SzablonTableContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SzablonTable);

export default SzablonTableContainer;
