import React from 'react'
import YourDetails from './YourDetails'
import MoreComments from './MoreComments'
import FinalComments from './FinalComments'

const UserFormContainer = (props) => {
  const [step1, setStep1] = React.useState(true)
  const [step2, setStep2] = React.useState(false)
  const [step3, setStep3] = React.useState(false)

  return (
    <div className="form_container">
      <div className="form_co_internal">
        <YourDetails step1_unveal={step1}/>
        <MoreComments step2_unveal={step2}/>
        <FinalComments step3_unveal={step3}/>
      </div>
    </div>
  )
}

export default UserFormContainer