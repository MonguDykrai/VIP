import React from 'react'
import { connect } from 'react-redux'
import UserLoggedIn from './user-logged-in'
import UserLoggedOut from './user-logged-out'

function User(props) {
  const { loggedIn } = props
  return (
    <div>
      {loggedIn ? <UserLoggedIn /> : <UserLoggedOut />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(User)
