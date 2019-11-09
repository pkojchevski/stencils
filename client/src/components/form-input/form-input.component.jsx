import React from "react";

import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles.jsx";

const FormInput = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
