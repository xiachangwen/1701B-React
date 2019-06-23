import React from 'react';
// import logo from './logo.svg';



class Wrong extends React.Component {
  constructor(props){
    super(props)
    this.val = React.createRef()
  } 

  render(){
   
    return <form className="Wrong">
            <input  ref={this.val}/> 
            <button onClick = {this.headClick}>点击</button>
        </form>
      
    
  }

  headClick = (e) =>{
    e.preventDefault();
    
    console.log(this.val.current.value)
  }
  
}

export default Wrong;
