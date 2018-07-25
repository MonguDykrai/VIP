import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.css'

class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.focusTextInput = this.focusTextInput.bind(this)
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className={styles.comSearchBox}>
        {loggedIn ? (
          <Link to="/user" className={styles.linkLogin}>
            <FontAwesomeIcon
              icon="user"
              className={styles.faUser}
            />
          </Link>
        ) : (
          <Link to="/login-by-tel" className={styles.linkLogin}>
            登录
          </Link>
        )}

        <input
          className={styles.iptSearch}
          placeholder="大家正在搜索：面膜"
          onClick={this.focusTextInput}
        />
        <i className={styles.iconClassify} />
      </div>
    )
  }

  focusTextInput() {
    window.location.hash = 'search' // Change Url to localhost:3000/#/search
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(SearchBox)
