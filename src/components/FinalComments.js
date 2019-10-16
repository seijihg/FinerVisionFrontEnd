import React from 'react'

const FinalComments = (props) => {
  return (
    <div className="step">
      <div className="yourdetails">
        Step 3: Final comments
      </div>
      <div>
        <label for="comments">Comments</label>
        <textarea id="comments"rows="10">
        </textarea>
      </div>
      <div>Next ></div>
    </div>
  )
}

export default FinalComments