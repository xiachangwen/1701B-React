import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Header from './header'
import Mainleft from './mainleft'
import Mainrifth from './mainrifth'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      list:[],
    
    }
  }

  render() {
    let {list} = this.state
  
    return (
      <div className="app">
        <Header />

      <div className="main">
        <Mainleft list={list} />
        <Mainrifth />
      
      </div>
      
      </div>
    )
  }

  componentDidMount() {
    let {list} = this.state
    axios.get('/api/data').then((res) =>{
      console.log(res)
      let{data} = res.data
      this.setState({
        list:data
      })
    })
  }
  
  
}

export default App;
