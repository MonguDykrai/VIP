import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.css'

class SearchBox extends Component {
  render() {
    const { loggedIn } = this.props
    console.log(loggedIn)
    return (
      <div className={styles['comp-search-box']}>
        {loggedIn ? (
          <Link to="/user" className={styles['link-login']}>
            <FontAwesomeIcon
              icon="user"
              className={styles['fa-user']}
            />
          </Link>
        ) : (
          <Link to="/login-by-tel" className={styles['link-login']}>
            登录
          </Link>
        )}

        <input
          className={styles['ipt-search']}
          placeholder="大家正在搜索：面膜"
        />
        <i className={styles['icon-classify']} />
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
