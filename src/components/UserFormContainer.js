import React from 'react'
import YourDetails from './YourDetails'
import MoreComments from './MoreComments'
import FinalComments from './FinalComments'

const UserFormContainer = (props) => {
  return (
    <div className="form_container">
      <div className="form_co_internal">
        <YourDetails />
        <MoreComments />
        <FinalComments />
      </div>
    </div>
  )
}

export default UserFormContainer