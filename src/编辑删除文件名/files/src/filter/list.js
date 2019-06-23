import React, { Component } from 'react'
import Texnt from './texnt'
import data from './data'

export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:data
        }
    }
    render() {
        let {list} = this.state
        console.log(this.state.list)
        return (
            <div className="list">
            {
                list.map((item,index) =>{
                    return <Texnt key={index} data={item}  index={index} />
                })
            }
                
            </div>
        )
    }
}
