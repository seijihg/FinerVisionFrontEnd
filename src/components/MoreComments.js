import React from "react";
import Step2Details from "./Step2Details";
import { CSSTransition } from "react-transition-group";

const MoreComments = ({ step2_unveal, step2UnvealHandler }) => {
  return (
    <div className="step">
      <div className="yourdetails">Step 2: More comments</div>
      <CSSTransition in={step2_unveal} timeout={600} classNames="fade" unmountOnExit>
      <Step2Details step2UnvealHandler={step2UnvealHandler} />
      </CSSTransition>
    </div>
  );
};

export default MoreComments;
