import React, { Component } from 'react'

import { connect } from 'react-redux'

import DownloadBanner from '../../components/download-banner'
import SearchBox from '../../components/search-box'

class Home extends Component {
  componentDidMount() {
    this.props.history.push(this.props.location.pathname)
  }

  render() {
    const { hideDownloadBanner } = this.props
    return (
      <div className="page-home">
        {hideDownloadBanner ? '' : <DownloadBanner />}
        <SearchBox />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hideDownloadBanner: state.hideDownloadBanner
  }
}

export default connect(mapStateToProps)(Home)
