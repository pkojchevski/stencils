import styled, { css } from "styled-components";

const shrinkLabelStyle = css`
  top: -14px;
  font-size: 10px;
  color: gray;
`;

export const SearchGroupContainer = styled.div`
  width: 30%;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #1d1a05;
`;

export const SearchInputContainer = styled.input`
  background: none;
  color: black;
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  padding-left: 5px;
  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyle}
  }
`;

export const SearchInputLabel = styled.label`
  color: gray;
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 0px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyle}
  }
`;
