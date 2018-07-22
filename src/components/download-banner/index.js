import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideDownloadBanner } from '../../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './index.css'

class DownloadBanner extends Component {
  render() {
    const { hideDownloadBanner } = this.props
    return (
      <div className={styles.comDownloadBanner}>
        <button onClick={hideDownloadBanner}>
          <FontAwesomeIcon
            className={styles.faTimes}
            icon="times"
          />
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hideDownloadBanner }, dispatch)
}

export default connect(null, mapDispatchToProps)(DownloadBanner)
