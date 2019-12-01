import React from "react";

import { connect } from "react-redux";

import "./delete-confirmation-modal.styles.scss";

import { createStructuredSelector } from "reselect";

import { ReactComponent as OkIcon } from "../../assets/icons/ok.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancel.svg";

import { deleteSzablonStart } from "../../redux/szablon/szablon.action";

import {
  selectSzablonForEdit,
  selectPage
} from "../../redux/szablon/szablon.selector";

const DeleteConfirmation = ({
  szablonForDelete,
  deleteSzablonStart,
  toggle,
  page
}) => {
  const handleOkClick = () => {
    deleteSzablonStart({ szablonForDelete, page });
    toggle();
  };

  return (
    <section className="delete-confirmation-modal-main">
      <div className="delete-confirmation-modal-header">
        Delete confirmation
      </div>
      <div className="delete-confirmation-modal-content">
        Czy na pewno chcesz usuniąć sablon?
      </div>
      <div className="delete-confirmation-modal-buttons">
        {/* <CancelIcon style={{ width: "20px" }} onClick={handleClose} /> */}
        <CancelIcon
          style={{ width: "25px", marginLeft: "10px", cursor: "pointer" }}
          onClick={toggle}
        />
        <OkIcon
          style={{ width: "25px", marginLeft: "10px", cursor: "pointer" }}
          onClick={handleOkClick}
        />
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  szablonForDelete: selectSzablonForEdit,
  page: selectPage
});

const mapDispatchToProps = dispatch => ({
  deleteSzablonStart: szablon => dispatch(deleteSzablonStart(szablon))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmation);
