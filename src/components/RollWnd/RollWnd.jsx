import React from "react";
import unrollIcon from "../../images/rollup.png";
import "./RollWnd.css";
const RollWnd = (props) => {
  return (
    <div className="container">
      <div>Calculator</div>
      <img
        src={unrollIcon}
        className="openIcon"
        alt="openWindow icon"
        onClick={() => {
          props.setRollUp(false);
        }}
      />
    </div>
  );
};

export default RollWnd;
