import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyle = css`
  top: -14px;
  font-size: 10px;
  color: ${mainColor};
`;

export const FormGroupContainer = styled.div`
  position: relative;
  /* margin: 0 20px; */
`;

export const FormTextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px auto;
  padding-left: 5px;
  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyle}
  }
`;

export const FormTextAreaLabel = styled.label`
  color: ${subColor};
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 0px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyle}
  }
`;
