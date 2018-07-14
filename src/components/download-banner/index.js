import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hideDownloadBanner } from '../../actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DownloadBanner extends Component {
  render() {
    const { hideDownloadBanner } = this.props
    return (
      <div className="comp-download-banner">
        <button onClick={hideDownloadBanner}>
          <FontAwesomeIcon
            icon="times"
            style={{ color: '#f2d1d5', top: '0.04rem', left: '0.08rem' }}
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
