import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

render(
  // definte the encompassing component,
  // DOM element we want to mount it to.
  <App/>,
  document.getElementById('app')
)

