import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.styles.scss";

const DatePickerInput = ({ date, handleChange, label, ...props }) => {
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleChange}
        placeholderText="Click to select a date"
      />
    </div>
  );
};

export default DatePickerInput;
