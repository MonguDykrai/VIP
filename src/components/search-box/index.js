import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBox extends Component {
  render() {
    const { loggedIn } = this.props
    console.log(loggedIn)
    return (
      <div className="comp-search-box">
        {loggedIn ? (
          <Link to="/user" className="search-box__link-login">
            <FontAwesomeIcon
              icon="user"
              style={{ fontSize: 30, color: '#585C64' }}
            />
          </Link>
        ) : (
          <Link to="/login-by-tel" className="search-box__link-login">
            登录
          </Link>
        )}

        <input
          className="search-box__input-search"
          placeholder="大家正在搜索：面膜"
        />
        <i className="icon-classify search-box__icon-classify" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(SearchBox)
