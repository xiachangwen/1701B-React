import React, { Component } from 'react'

import './css/style.scss'

import Router from './router/index'

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Router />
      </div>
    )
  }
}

