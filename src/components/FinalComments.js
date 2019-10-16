import React from 'react'
import Step3Details from './Step3Details'

const FinalComments = ({step3_unveal}) => {
  return (
    <div className="step">
      <div className="yourdetails">
        Step 3: Final comments
      </div>
      {step3_unveal ? <Step3Details /> : null}
    </div>
  )
}

export default FinalComments