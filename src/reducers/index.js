const initialState = {
  hideDownloadBanner: false,
  loggedIn: Boolean(localStorage.loggedIn)
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HIDE_DOWNLOAD_BANNER':
      return Object.assign({}, state, {
        hideDownloadBanner: true
      })
    case 'LOG_IN':
      localStorage.setItem('loggedIn', 'true') // remember me
      return Object.assign({}, state, {
        loggedIn: true
      })
    default:
      return state
  }
}