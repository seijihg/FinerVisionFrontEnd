import React from "react";

const Step2Details = ({
  step2UnvealHandler,
  phone,
  gender,
  day,
  month,
  year,
  setPhoneHandler,
  setGenderHandler,
  setDayHandler,
  setMonthHandler,
  setYearHandler
}) => {
  return (
    <div className="gray_area">
      <div className="align">
        <div className="item">
          <label for="tel">Telephone number </label>
          <br></br>
          <input type="number" id="tel" required value={phone} onChange={setPhoneHandler} max="99999999999"></input>
        </div>
        <div className="item">
          <label for="gender">Gender</label>
          <br></br>
          <select id="gender" value={gender} onChange={setGenderHandler}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div>
        <label for="dob">Date of birth</label>
        <br></br>
        <input type="number" id="dob" required value={day} onChange={setDayHandler} max="31"></input>
        <input type="number" id="dob" required value={month} onChange={setMonthHandler} max="12"></input>
        <input type="number" id="dob" required value={year} onChange={setYearHandler} max="2015"></input>
      </div>
      <div className="btn">
        <div className="btn_next" onClick={step2UnvealHandler}>
          Next >
        </div>
      </div>
    </div>
  );
};

export default Step2Details;
