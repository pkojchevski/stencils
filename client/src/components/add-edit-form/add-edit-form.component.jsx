import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";

import DatepickerInput from "../date-picker-input/date-picker-input.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import FormSelect from "../form-select/form-select.component";
import FormTextArea from "../form-textarea/form-textarea.component";

import {
  AddEditFormContainer,
  AddEditFormTitle,
  AddEditFormButtons
} from "./add-edit-form.styles";

import {
  selectSzablonForEdit,
  selectPage
} from "../../redux/szablon/szablon.selector";

import FormInput from "../form-input/form-input.component";
import { ReactComponent as OkIcon } from "../../assets/icons/ok.svg";
import { ReactComponent as CancelIcon } from "../../assets/icons/cancel.svg";
import { isEmptyObj } from "../../utility/utility";
import {
  updateSzablonStart,
  getAllSzablonsStart,
  addSzablonStart,
  getSzablonPageStart
} from "../../redux/szablon/szablon.action";

registerLocale("pl", pl);

const AddEditForm = ({
  szablonForEdit,
  updateSzablonStart,
  isEdit,
  addSzablonStart,
  toggle,
  page,

}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [szablon, setSzablon] = useState({ ...szablonForEdit });
  useEffect(() => {
    setSzablon({ ...szablonForEdit });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEdit) {
      updateSzablonStart({ szablon, page });
    } else {
      addSzablonStart({ szablon: { ...szablon, storedPosition: 0 }, page });
    }
    toggle();
  };

  const setDateOnDatePicker = date => {
    setStartDate(date);
    setSzablon(prevState => ({
      ...prevState,
      Data_przyjecia: new Date(date)
    }));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setSzablon(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <AddEditFormContainer>
      <AddEditFormTitle>
        {isEdit ? <h3>Edit Szablon</h3> : <h3>Add Szablon</h3>}
      </AddEditFormTitle>
      <hr></hr>
      {!isEmptyObj(szablon) ? (
        <div>
          <form
            onSubmit={e => handleSubmit(e)}
            style={{ width: "90%", overflow: "hidden", margin: "0 auto" }}
          >
            <FormInput
              name="Nazwa"
              type="text"
              value={szablon.Nazwa}
              onChange={e => handleChange(e)}
              label="Name"
              required
            />
            <FormSelect
              name="Strona"
              onChange={e => handleChange(e)}
              value={szablon.Strona}
              label="Strona"
              required
            >
              <option value=""></option>
              <option value="TOP">TOP</option>
              <option value="BOT">BOT</option>
            </FormSelect>
            <FormInput
              name="IndeksPCB"
              type="text"
              onChange={e => handleChange(e)}
              value={szablon.IndeksPCB}
              label="Pcb"
              required
            />
            <DatePicker
              selected={szablon.Data_przyjecia}
              onChange={e => setDateOnDatePicker(e)}
              todayButton="Dzisiaj"
              locale="pl"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            <FormTextArea
              name="Uwagi"
              type="text"
              onChange={e => handleChange(e)}
              value={szablon.Uwagi}
              label="Comment"
            />
            <AddEditFormButtons>
              <button type="button">
                <CancelIcon
                  style={{ width: "30px", height: "30px" }}
                  onClick={toggle}
                />
              </button>
              <button type="submit">
                <OkIcon style={{ width: "30px", height: "30px" }} />
              </button>
            </AddEditFormButtons>
          </form>
        </div>
      ) : null}
    </AddEditFormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  szablonForEdit: selectSzablonForEdit,
  page: selectPage
});

const mapDispatchToProps = dispatch => ({
  updateSzablonStart: szablon => dispatch(updateSzablonStart(szablon)),
  getAllSzablonsStart: () => dispatch(getAllSzablonsStart()),
  addSzablonStart: szablon => dispatch(addSzablonStart(szablon)),
  getSzablonPageStart: page => dispatch(getSzablonPageStart(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditForm);
