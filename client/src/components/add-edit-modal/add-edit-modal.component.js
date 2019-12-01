import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { StyledModal } from "./add-edit-modal.styles.js";

import { useTransition, animated } from "react-spring";

function Portal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  const mainDivRef = useRef(document.createElement("div"));

  useEffect(() => {
    const mainDiv = mainDivRef.current;
    if (modalRoot && mainDiv) {
      modalRoot.appendChild(mainDiv);
    }
    return () => {
      if (modalRoot && mainDiv) {
        modalRoot.removeChild(mainDiv);
      }
    };
  }, [modalRoot]);

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null;
}

const Modal = ({ children, show }) => {
  const modalTransition = useTransition(show, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <Portal>
      <StyledModal.Container>
        {modalTransition.map(({ item, key, props }) => {
          return item ? (
            <animated.div
              className="modal-wrapper"
              key={key}
              style={props}
              aria-modal="true"
              role="dialog"
            >
              <animated.div className="modal-body">{children}</animated.div>
            </animated.div>
          ) : null;
        })}
        })}
      </StyledModal.Container>
    </Portal>
  );
};

export default Modal;
