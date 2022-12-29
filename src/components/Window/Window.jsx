import React from "react";
import Draggable from "react-draggable";
import rollupIcon from "../../images/rollup.png";
import "./Window.css";
const Window = (props) => {
  return (
    <Draggable handle=".header">
      <div className="window">
        <div className="header">
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
    </Draggable>
  );
};
export default Window;
