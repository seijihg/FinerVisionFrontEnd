import React from "react";
import YourDetails from "./YourDetails";
import MoreComments from "./MoreComments";
import FinalComments from "./FinalComments";
import "../sass/animations.scss";
import Helpers from '../helpers/helpers'

const UserFormContainer = props => {
  const [step1, setStep1] = React.useState(true);
  const [step2, setStep2] = React.useState(false);
  const [step3, setStep3] = React.useState(false);

  const [fname, setFname] = React.useState("");
  const [sname, setSname] = React.useState("");
  const [email, setEmail] = React.useState("");

  const step1UnvealHandler = event => {
    if (fname === "" || sname === "" || !Helpers.validateEmail(email) ) {
      return 
    }
    setStep1(!step1);
    setStep2(!step2);
    setStep3(false);
  };
  const step2UnvealHandler = event => {
    setStep1(false);
    setStep2(!step2);
    setStep3(!step3);
  };
  const step3SubmitHandler = event => {
    event.preventDefault()
    setStep1(false);
    setStep2(false);
    setStep3(true);
  };

  const setNameHandler = event => {
    setFname(event.target.value)
  }
  const setSnameHandler = event => {
    setSname(event.target.value)
  }
  const setEmailHandler = event => {
    setEmail(event.target.value)
  }
  return (
    <div className="form_container">
      <form className="form_co_internal" onSubmit={step3SubmitHandler}>
        <YourDetails
          step1_unveal={step1}
          step1UnvealHandler={step1UnvealHandler}
          fname={fname}
          sname={sname}
          email={email}
          setNameHandler={setNameHandler}
          setSnameHandler={setSnameHandler}
          setEmailHandler={setEmailHandler}
        />
        <MoreComments
          step2_unveal={step2}
          step2UnvealHandler={step2UnvealHandler}
        />
        <FinalComments
          step3_unveal={step3}
        />
      </form>
    </div>
  );
};

export default UserFormContainer;
