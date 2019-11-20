import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSzablonForPcb } from "../../redux/szablon/szablon.selector";

import Typing from "react-typing-animation";

import "./position.styles.scss";

const Position = ({ szablonyForPcb }) => {
  return (
    <div>
      {szablonyForPcb ? (
        szablonyForPcb.map(szablon => (
          <Typing speed={50} key={szablon.id}>
            <h1 className="position-header">{szablon.Pozycja}</h1>
          </Typing>
        ))
      ) : (
        <h1 className="position-header">Pozycja </h1>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  szablonyForPcb: selectSzablonForPcb
});

export default connect(mapStateToProps)(Position);
