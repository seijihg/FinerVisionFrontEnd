import React from 'react'

const MoreComments = (props) => {
  return (
    <div className="step">
    <div className="yourdetails">
      Step 2: More comments
    </div>
    <div>
      <label for="tel">Telephone number </label>
      <input type="text" id="tel" required ></input>
      <label for="gender">Gender</label>
      <select id="gender">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div>
      <label for="dob">Date of birth</label>
      <input type="text" id="dob"  required ></input>
      <input type="text" id="dob"  required ></input>
      <input type="text" id="dob"  required ></input>
    </div>
    <div>Next ></div>
    </div>
  )
}

export default MoreComments