import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel,
  LineSpan
} from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    <LineSpan></LineSpan>
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
