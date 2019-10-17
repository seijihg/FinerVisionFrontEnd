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

  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  const [comments, setComments] = React.useState("");

  const step1UnvealHandler = event => {
    if (fname === "" || sname === "") {
      window.alert("First name and Surname cant be empty")
      return 
    }
    if (!Helpers.validateEmail(email) ) {
      window.alert("Wrong Email")
      return 
    }
    setStep1(!step1);
    setStep2(!step2);
    setStep3(false);
  };
  const step2UnvealHandler = event => {
    if (day === "" || day > 31) {
      window.alert("Day is wrong")
      return 
    }
    if (month === "" || month > 12) {
      window.alert("Month is wrong")
      return 
    }
    if (year === "" || year > new Date().getFullYear()) {
      window.alert("Year is wrong")
      return 
    }
    setStep1(false);
    setStep2(!step2);
    setStep3(!step3);
  };
  const step3SubmitHandler = event => {
    event.preventDefault()
    const data = {
      first_name: fname,
      last_name: sname,
      email: email,
      phone: phone,
      gender: gender,
      dob: `${day}/${month}/${year}`,
      comments: comments
    }
    setStep1(false);
    setStep2(false);
    setStep3(false);

    Helpers.submitForm(data)
    .then(res => {
      window.alert("Successfully Added User. Check console.log")
    })
    .catch(err => console.log(err))
    console.log("Fill in API in helpers.js for backend to POST form to save data.")
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
  const setPhoneHandler = event => {
    const phone_target = event.target.value
    if (phone_target.length <= 11) {return setPhone(phone_target)}
    if (!Helpers.validatePhone(phone)) {
      window.alert("Insert valid UK Phone Number")
      setPhone("")
    }
  }
  const setGenderHandler = event => {
    setGender(event.target.value)
  }
  const setDayHandler = event => {
    const day_target = event.target.value
    if (day_target.length <= 2) {return setDay(day_target)}
  }
  const setMonthHandler = event => {
    const month_target = event.target.value
    if (month_target.length <= 2) {return setMonth(month_target)}
  }
  const setYearHandler = event => {
    if (event.target.value.length <= 4) { return setYear(event.target.value) }
  }
  const setCommentsHandler = event => {
    setComments(event.target.value)
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
          phone={phone}
          gender={gender}
          day={day}
          month={month}
          year={year}
          setPhoneHandler={setPhoneHandler}
          setGenderHandler={setGenderHandler}
          setDayHandler={setDayHandler}
          setMonthHandler={setMonthHandler}
          setYearHandler={setYearHandler}
        />
        <FinalComments
          step3_unveal={step3}
          comments={comments}
          setCommentsHandler={setCommentsHandler}
        />
      </form>
    </div>
  );
};

export default UserFormContainer;
