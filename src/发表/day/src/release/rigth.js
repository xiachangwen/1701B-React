import React from 'react'
import bus from '../ulite/buesrt'

export default class Rigth extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[]
          }
    }


    render(){
        let {list} = this.state
        console.log(this.state)
        return <div className="rigth">
            <div className="reith-top">
            {
               list && list.map((item,index) => {
                    
                      return   <div key={index}>
                             <i>{item.val} : </i>
                            <span>{item.text}</span>
                        </div>
                       
                   
                })
            }
            </div>
        </div>
    }

    
    componentDidMount() {
        bus.on('add',(obj) => {
            // console.log(obj)
            let {list} = this.state

            this.setState({
                list:[...list,obj]
            })
       })
       
    }
    
}