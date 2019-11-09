import React from "react";

import {
  FormGroupContainer,
  FormSelectContainer,
  FormSelectLabel
} from "./form-select.styles.jsx";

const FormSelect = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormSelectContainer onChange={handleChange} {...props} />
    {label ? (
      <FormSelectLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormSelectLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormSelect;
