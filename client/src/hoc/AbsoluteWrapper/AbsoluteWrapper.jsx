import React from "react";

const AbsoluteWrapper = WrappedComponent => props => {
  return (
    <div className="position-absolute">
      <WrapedComponent {...props} />
    </div>
  );
};

export default AbsoluteWrapper;
