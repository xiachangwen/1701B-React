import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Header from './typery/header'
import Mainleft from './typery/mainleft'
import Mainrifth from './typery/mainrifth'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      list:[],
      index:0
    }
  }

  render() {
   
    let {list,index} = this.state
    //  console.log(str)
    return (
      <div className="app">
        <Header />

      <div className="main">
        <Mainleft list={list} add={(num) => {
          console.log(num)
          this.setState({
            index:num
          })
        }} />
        <Mainrifth index={list[index]} />
      
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
