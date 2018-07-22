import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from '../pages/home'
import LoginByTel from '../pages/login-by-tel'
import LoginByPas from '../pages/login-by-pas'
import ForgotPwd from '../pages/forgot-pwd'
import User from '../pages/user'

class Vip extends Component {
  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div className="vip">
          <Switch>
            <Route path="/user" component={User} />
            <Route path="/forgot-pwd" component={ForgotPwd} />
            <Route path="/login-by-pas" component={LoginByPas} />
            {/* 重定 ( Redirect ) 向会自动往 history 栈中 push */}
            <Route
              path="/login-by-tel"
              render={() => (loggedIn ? <Redirect to="/" /> : <LoginByTel />)}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Vip)
