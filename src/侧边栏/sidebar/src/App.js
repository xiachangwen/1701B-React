import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar'
import data from './data'
 
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      list:data
    }
  }

  render(){
    let {list} = this.state
    // console.log(.list)
    return (
      <div className="App">
        <Sidebar list={list} add={(num)=>{
          let data = [...list]
          data.map(item => item.isShow = false)
          data[num].isShow = !data[num].isShow
          this.setState( {
            list:data
          })
        }}/>
      </div>
    )
  }
  
}

export default App;
