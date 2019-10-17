import React from "react";

const Step1Details = ({
  step1UnvealHandler,
  fname,
  sname,
  email,
  setNameHandler,
  setSnameHandler,
  setEmailHandler
}) => {
  return (
    <div className="gray_area">
      <div className="align">
        <div className="item">
          <label for="name">First Name</label>
          <br></br>
          <input
            type="text"
            id="name"
            required
            value={fname}
            onChange={setNameHandler}
          ></input>
        </div>
        <div className="item">
          <label for="surname">Surname</label>
          <br></br>
          <input
            type="text"
            id="surname"
            required
            value={sname}
            onChange={setSnameHandler}
          ></input>
        </div>
      </div>
      <div>
        <label for="email">Email Address</label>
        <br></br>
        <input type="email" id="email" required value={email} onChange={setEmailHandler}></input>
      </div>
      <div className="btn">
        <div className="btn_next" onClick={step1UnvealHandler}>
          Next >
        </div>
      </div>
    </div>
  );
};

export default Step1Details;
