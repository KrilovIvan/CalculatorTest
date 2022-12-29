import React, { useState } from "react";
import rollupIcon from "../../images/rollup.png";
import "../Window/Window.css";
const CustomWindow = (props) => {
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    if (pressed) {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  return (
    <div
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className="window"
    >
      <div
        className="header"
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        <div className="title">Calculator</div>
        <div className="navigation">
          <img
            src={rollupIcon}
            className="windowIcon"
            alt="close icon"
            onClick={() => {
              props.setRollUp(true);
            }}
          />
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default CustomWindow;
