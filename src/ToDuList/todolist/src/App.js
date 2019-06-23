import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Top from './todolist/top'
import Center from './todolist/cneter'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <Top />
        <Center />
      </div>
    )
  }
  
}

export default App;
