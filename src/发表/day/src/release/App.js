import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Left from './left'
import Rigth from './rigth'
// import data from './cebian/data'

class App extends React.Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return (
      <div className="App">
        <Left />
        <Rigth />
      </div>
    )
  }
  
}

export default App;
