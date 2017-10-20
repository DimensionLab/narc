import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, { api: api.create() })

const renderApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
