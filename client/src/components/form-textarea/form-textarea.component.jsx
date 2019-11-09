import React from "react";

import {
  FormGroupContainer,
  FormTextAreaContainer,
  FormTextAreaLabel
} from "./form-textarea.styles";

const FormTextArea = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormTextAreaContainer onChange={handleChange} {...props} />
    {label ? (
      <FormTextAreaLabel
        className={props.value ? (props.value.length ? "shrink" : "") : ""}
      >
        {label}
      </FormTextAreaLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormTextArea;
