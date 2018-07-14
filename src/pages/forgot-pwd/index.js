import React, { Component } from 'react'

export default class ForgotPwd extends Component {
  componentDidMount() {
    this.props.history.push(this.props.location.pathname)
  }
  render() {
    return (
      <div>
        <span>忘记密码</span>
      </div>
    )
  }
}
