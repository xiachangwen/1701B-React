import React, { Component } from 'react'

import './css/style.scss'
import Router from './routers/index'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router />
      </div>
    )
  }
}
