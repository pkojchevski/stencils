import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel,
  LineSpan,
  FormInputError
} from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, error, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    <LineSpan></LineSpan>
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
    {error ? <FormInputError>{error}</FormInputError> : null}
  </FormGroupContainer>
);

export default FormInput;
