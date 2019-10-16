import React from "react";
import Step3Details from "./Step3Details";
import { CSSTransition } from "react-transition-group";

const FinalComments = ({ step3_unveal }) => {
  return (
    <div className="step">
      <div className="yourdetails">Step 3: Final comments</div>
      <CSSTransition
        in={step3_unveal}
        timeout={600}
        classNames="fade"
        unmountOnExit
      >
        <Step3Details />
      </CSSTransition>
    </div>
  );
};

export default FinalComments;
