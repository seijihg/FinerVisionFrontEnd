import React from 'react'

const Step2Details = (props) => {
  return (
    <div className="gray_area">
        <div className="align">
          <div className="item">
            <label for="tel">Telephone number </label>
            <br></br>
            <input type="text" id="tel" required ></input>
          </div>
          <div className="item">
            <label for="gender">Gender</label>
            <br></br>
            <select id="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div>
          <label for="dob">Date of birth</label>
          <br></br>
          <input type="text" id="dob"  required ></input>
          <input type="text" id="dob"  required ></input>
          <input type="text" id="dob"  required ></input>
        </div>
        <div className="btn">
          <div className="btn_next">Next ></div>
        </div>
      </div>
  )
}

export default Step2Details