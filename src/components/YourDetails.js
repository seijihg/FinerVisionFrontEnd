import React from 'react'
import Step1Details from './Step1Details'

const YourDetails = ({step1_unveal}) => {
  return (
    <div className="step">
      <div className="yourdetails">
        Step 1: Your details
      </div>
      {step1_unveal ? <Step1Details /> : null}
    </div>
  )
}

export default YourDetails