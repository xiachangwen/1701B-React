import React from 'react';
// import logo from './logo.svg';
import './maoyan/css/style.scss';

import Router from './maoyan/router/index'

class App extends React.Component {


  render(){
    return (
      <div className="App">
        <Router />
      </div>
    )
  }
  
}

export default App;
