import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './store/store'
import Header from './ui/organisms/header'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      
      <Header/>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
