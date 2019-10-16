import React from "react";
import Step1Details from "./Step1Details";
import { CSSTransition } from "react-transition-group";

const YourDetails = ({
  step1_unveal,
  step1UnvealHandler,
  fname,
  sname,
  email,
  setNameHandler,
  setSnameHandler,
  setEmailHandler
}) => {
  return (
    <div className="step">
      <div className="yourdetails">Step 1: Your details</div>
      <CSSTransition
        in={step1_unveal}
        timeout={600}
        classNames="fade"
        unmountOnExit
      >
        <Step1Details
          step1UnvealHandler={step1UnvealHandler}
          fname={fname}
          sname={sname}
          email={email}
          setNameHandler={setNameHandler}
          setSnameHandler={setSnameHandler}
          setEmailHandler={setEmailHandler}
        />
      </CSSTransition>
    </div>
  );
};

export default YourDetails;
