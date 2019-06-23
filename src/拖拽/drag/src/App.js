import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Drags from './drags'

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <Drags width={200} height={200} />
      </div>
    )
  }
  
}

export default App;
