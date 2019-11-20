import styled from "styled-components";

const Container = styled.div`
  & .modal-wrapper {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

    & .modal-body {
      position: fixed;
      width: 50%;
      height: auto;
      top: 50%;
      left: 50%;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #110133;
      transform: translate(-50%, -50%);
      border: 1px solid $border-color;
      -moz-box-shadow: inset 0 0 25px #00918e;
      -webkit-box-shadow: inset 0 0 25px #00918e;
      box-shadow: inset 0 0 25px #00918e;
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledModal = {
  ModalWrapper,
  ModalBody,
  CloseButton,
  Container
};
