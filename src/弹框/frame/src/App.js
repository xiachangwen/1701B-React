import React from 'react';
import './App.css';

import Dialog from './dialog'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[
        {
          title:"打开 alert 提示框",
          type:'alert',
          name:'提示',
          contern:'操作成功'
        },
        {
          title:"打开 confirm 提示框",
          type:'confirm',
          name:'请输入姓名',
        },
        {
          title:"打开 prompt 提示框",
          type:'prompt',
          name:'提示',
          contern:'确定执行次操作'
        }
      ],
      isflag:false,
      obj:{}
    }
  }

  render(){
    let {list, isflag, obj} = this.state
    return (
        <div className="App">

          <ul>
            {
              list.map((item,index) => <li key={index} onClick = {() =>{
                this.setState({
                  isflag:true,
                  obj:item
                })
              } }>{item.title}</li>)
            }
          </ul>
        
        { isflag ? <Dialog obj={obj} add= {() =>{
          this.setState({
            isflag: this.state.list.isflag == false
          })
          
        }}/> : null}
      </div>
    )
  }
  
}

export default App;
