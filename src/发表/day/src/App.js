import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Left from './cebian/left'
import Rigth from './cebian/rigth'
// import data from './cebian/data'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
  }

  render(){
    let {list} = this.state
    console.log(this.state.list)
    return (
      <div className="App">
        <Left add={(obj)=>{
          console.log(obj)
          // let obj = {
          //   val:val,
          //   text:text
          // }
       
          // list.push(obj)
          this.setState({
            list:[...list,obj]
          })
        }}/>
        <Rigth list={list}/>
      </div>
    )
  }
  
}

export default App;
