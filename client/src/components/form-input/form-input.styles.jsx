import styled, { css } from "styled-components";

const shrinkLabelStyle = css`
  top: -14px;
  font-size: 10px;
  color: #4dd599;
`;

export const FormGroupContainer = styled.div`
  position: relative;
  /* margin: 25px auto; */
`;

export const FormInputContainer = styled.input`
  background: none;
  color: #110133;
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #110133;
  margin: 25px auto;
  padding-left: 5px;
  transition: 300ms ease out;

  &:focus {
    outline: none;
  }

  &:focus ~ span {
    transform: scale(1);
  }

  &:focus ~ label {
    ${shrinkLabelStyle}
  }
`;

export const FormInputLabel = styled.label`
  color: #110133;
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

export const LineSpan = styled.span`
  background-color: #ffdc34;
  height: 1.8px;
  position: absolute;
  -webkit-transform: scale(0, 1);
  -ms-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
  width: 100%;
  z-index: 10;
  top: 1.42em;
`;

export const FormInputError = styled.div`
  color: red;
  font-size: 12px;
  font-style: italic;
`;
