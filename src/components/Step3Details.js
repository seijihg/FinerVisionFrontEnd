import React from 'react'

const Step3Details = (props) => {
  return (
    <div className="gray_area">
      <div className="comment_section">
        <div>
          <label for="comments">Comments</label>
          <br></br>
          <textarea id="comments">
          </textarea>
        </div>
        <div className="btn_next">Next ></div>
      </div>
    </div>
  )
}

export default Step3Details