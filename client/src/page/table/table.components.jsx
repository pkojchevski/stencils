import React, { useState, useEffect } from "react";

import "./table.styles.scss";

import { connect } from "react-redux";

import {
  getAllSzablonsStart,
  getSzablon,
  searchSzablonsFromTableStart
} from "../../redux/szablon/szablon.action";

import SearchInput from "../../components/search-input/search-input.component";
import Modal from "../../components/add-edit-modal/add-edit-modal.component.js";
import DeleteConfirmation from "../../components/delete-confirmation-modal/delete-confirmation-modal.component";
import AddEditForm from "../../components/add-edit-form/add-edit-form.component";

import { ReactComponent as AddIcon } from "../../assets/icons/plus.svg";

import SzablonTableContainer from "../../components/szablon-table/szablon-table.container";
import useToggle from "../../components/hooks/useToggle";

import { useSpring, animated } from "react-spring";

const TablePage = ({
  getAllSzablonsStart,
  getSzablon,
  searchSzablonsFromTableStart,
  szablony
}) => {
  useEffect(() => {
    getAllSzablonsStart();
  }, [getAllSzablonsStart]);

  const [searchValue, setSearchValue] = useState("");

  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useToggle(false);

  const addClickHandler = () => {
    setOpenAddEdit(true);
    setIsEdit(false);
    getSzablon({
      Data_przyjecia: new Date(),
      IndeksPCB: "",
      KodSzablonu: "",
      Nazwa: "",
      Pozycja: "",
      Strona: "",
      Uwagi: ""
    });
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value);
    searchSzablonsFromTableStart(searchValue);
  };

  const toggleDelete = () => {
    setOpenDeleteConfirmation(!openDeleteConfirmation);
  };

  const toggleAddEdit = () => {
    setOpenAddEdit(!openAddEdit);
  };

  return (
    <div className="table-absolute-wrapper">
      <div className="table-container">
        <SearchInput
          name="search"
          label="Search"
          type="text"
          value={searchValue}
          onChange={e => handleChange(e)}
        />
        <AddIcon
          className="add-icon"
          style={{ width: "30px", height: "30px" }}
          onClick={e => addClickHandler(e)}
        />
        <Modal show={openAddEdit}>
          <AddEditForm isEdit={isEdit} toggle={toggleAddEdit}></AddEditForm>
        </Modal>
        <Modal show={openDeleteConfirmation}>
          <DeleteConfirmation toggle={toggleDelete}></DeleteConfirmation>
        </Modal>

        <SzablonTableContainer
          toggleDeleteModal={toggleDelete}
          toggleEditModal={toggleAddEdit}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getAllSzablonsStart: () => dispatch(getAllSzablonsStart()),
  getSzablon: szablon => dispatch(getSzablon(szablon)),
  searchSzablonsFromTableStart: searchValue =>
    dispatch(searchSzablonsFromTableStart(searchValue))
});

export default connect(
  null,
  mapDispatchToProps
)(TablePage);
