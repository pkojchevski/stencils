import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { TweenMax, Sine } from "gsap/all";

import "./table-paginator.styles.scss";

import { getSzablonPageStart } from "../../redux/szablon/szablon.action";
import { selectMaxPages } from "../../redux/szablon/szablon.selector";

const TablePaginator = ({ getSzablonPageStart, pages }) => {
  let dotRef = useRef();
  const numItemsArr = Array.from(Array(pages).keys());
  const spacing = 25;
  const radius = 8;
  const strokeWidth = 2;

  let index = 0;
  let initX = (100 - spacing * (pages - 1)) * 0.5;

  const [dot, setDot] = useState({
    cx: initX + index * spacing,
    cy: 50,
    fill: "#00918e",
    r: radius - strokeWidth * 2
  });

  const [ring, setRing] = useState({
    cx: initX,
    cy: "50%",
    r: radius,
    strokeWidth: strokeWidth
  });

  const handleClick = targetIndex => {
    getSzablonPageStart(targetIndex + 1);
    const distance = Math.abs(targetIndex - index) * spacing * 0.5;
    const duration = Math.min((distance / spacing) * 0.2, 0.4);
    TweenMax.to(dotRef, 0.15, {
      scaleX: 1.5,
      scaleY: 0.5,
      //   transformOrigin: "bottom",
      ease: Sine.easeOut,
      yoyo: true,
      repeat: 1
    });
    TweenMax.to(dotRef, duration, {
      delay: 0.175,
      x: targetIndex * spacing,
      ease: Sine.easeInOut
    });
    TweenMax.to(dotRef, duration * 0.5, {
      delay: 0.175,
      y: -distance,
      ease: Sine.easeOut,
      yoyo: true,
      repeat: 1,
      onComplete: squish
    });

    index = targetIndex;
  };

  const squish = () => {
    TweenMax.to(dotRef, 0.15, {
      scaleX: 1.5,
      scaleY: 0.75,
      //   transformOrigin: "bottom",
      ease: Sine.easeOut,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <div className="page-navigator">
      <svg viewBox="0 0 100 100">
        <circle
          cx={dot.cx}
          cy={dot.cy}
          fill={dot.fill}
          r={dot.r}
          ref={el => (dotRef = el)}
        />
        {numItemsArr.map((item, index) => (
          <circle
            key={index}
            cx={ring.cx + index * spacing}
            cy={ring.cy}
            r={ring.r}
            fillOpacity="0"
            stroke="#ffdc34"
            strokeWidth={ring.strokeWidth}
            pointerEvents="all"
            cursor="pointer"
            onClick={() => handleClick(index)}
          />
        ))}
      </svg>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getSzablonPageStart: page => dispatch(getSzablonPageStart(page))
});

const mapStateToProps = createStructuredSelector({
  pages: selectMaxPages
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePaginator);
