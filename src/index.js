import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Vip from './components/App'

// 字体图标
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faChevronLeft,
  faEye,
  faUser,
  faWallet,
  faTruck,
  faListAlt
} from '@fortawesome/free-solid-svg-icons'

// 导入样式文件
import './styles/media_query.css'
import './styles/styles.css'

const icons = [faTimes, faChevronLeft, faEye, faUser, faWallet, faTruck, faListAlt]

library.add(...icons)

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Vip />
  </Provider>,
  document.getElementById('root')
)
