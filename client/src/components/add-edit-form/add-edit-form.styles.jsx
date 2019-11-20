import styled from "styled-components";

export const AddEditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddEditFormTitle = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #110133;
`;

export const AddEditFormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  & button {
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export const CancelIconContainer = styled.svg`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 87.1%;
  right: 40%;
`;
