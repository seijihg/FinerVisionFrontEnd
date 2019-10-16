import React from 'react'

const FinalComments = (props) => {
  return (
    <div className="step">
      <div className="yourdetails">
        Step 3: Final comments
      </div>
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
    </div>
  )
}

export default FinalComments