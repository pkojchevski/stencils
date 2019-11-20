import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.styles.scss";

const DatePickerInput = ({ date, handleChange, label, ...props }) => {
  const [startDate, setStartDate] = useState(date);

  const setDateOnDatePicker = e => {
    console.log("event:", e);
    // setStartDate(date);
    // handleChange();
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={e => setDateOnDatePicker(e)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DatePickerInput;
