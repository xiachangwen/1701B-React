
import React, { Component } from 'react'
import './App.css'

import List from './filter/list'
import Mack from './filter/mack'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        
        <List />
        <Mack />

      </div>
    )
  }
}
