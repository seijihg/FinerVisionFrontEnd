import React from 'react'

const Step1Details = (props) => {
  return (
    <div className="gray_area">
        <div className="align">
          <div className="item">
          <label for="name">First Name</label>
          <br></br>
          <input type="text" id="name" required ></input>
          </div>
          <div className="item">
          <label for="surname">Surname</label>
          <br></br>
          <input type="text" id="surname"  required ></input>
          </div>
        </div>
        <div>
          <label for="email">Email Address</label>
          <br></br>
          <input type="email" id="email"  required ></input>
        </div>
        <div className="btn">
          <div className="btn_next">Next ></div>
        </div>
    </div>
  )
}

export default Step1Details