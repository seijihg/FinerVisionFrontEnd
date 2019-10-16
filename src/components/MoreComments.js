import React from 'react'
import Step2Details from './Step2Details'

const MoreComments = ({step2_unveal}) => {
  return (
    <div className="step">
      <div className="yourdetails">
        Step 2: More comments
      </div>
      {step2_unveal ? <Step2Details /> : null}
    </div>
  )
}

export default MoreComments