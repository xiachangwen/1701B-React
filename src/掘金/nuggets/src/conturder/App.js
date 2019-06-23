import React, { Component } from 'react'

import './css/style.scss'

import Routers from './router/index'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Routers />
      </div>
    )
  }
}

