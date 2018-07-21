import { HIDE_DOWNLOAD_BANNER, LOG_IN, LOG_OUT } from '../constants'

export const hideDownloadBanner = () => ({ type: HIDE_DOWNLOAD_BANNER })

export const logIn = () => ({ type: LOG_IN })

export const logOut = () => ({ type: LOG_OUT })