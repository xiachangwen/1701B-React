import React from 'react';
import './juanpi/juanpi.css';

import Header from './juanpi/header'
import Scations from './juanpi/scations'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      header:{
        title:'美英吉普夏季男士纯棉短袖T恤衫韩版宽松大码打底衫男装体恤',
        pic:29,
        pin: '参考价:¥138',
        chux:'59元3件任选详情>>'
      },
      senter:{
        color:[
          {
            title:'靠脸吃饭黑色',
            img:'//s2.juancdn.com/goods/180330/2/f/5abe5073a9fcf857e978ef03_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg'
          },
          {
            title:'靠脸吃饭红色',
            img:'//s2.juancdn.com/goods/180330/8/3/5abe507e8150a15bca1ec8c5_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg'
          },
          {
            title:'靠脸吃饭蓝色',
            img:'//s2.juancdn.com/goods/180330/6/c/5abe508a8150a15c542f8c28_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg'
          },{
            title:'靠脸吃饭白色',
            img:'//s2.juancdn.com/goods/180330/5/d/5abe50948150a15c4e74d72a_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg'
          },{
            title:'靠脸吃饭灰色',
            img:'//s2.juancdn.com/goods/180330/6/8/5abe509fa9fcf85835313273_800x800.jpg?iopcmd=thumbnail&type=8&width=400&height=400%7Ciopcmd=convert&Q=88&dst=jpg'
          }
        ],
        size:['M','L','XL','XXL','3XL','4XL'],
        conter:1
      }
    }
  }

  render() {
    let {header, senter} = this.state
    return (<div className = "App">
        <Header header={header} />
        <Scations senter={senter} add={(num) => {
          console.log(num)
          senter.conter = num
          this.setState({
            senter:{...this.state.senter,senter}
            // senter

          })
        }}/>

     </div>
    )
  }

}

export default App;