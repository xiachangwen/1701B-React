import React, { Component } from 'react'
import bus from '../utlis/bus'

export default class Top extends Component {
    constructor(props) {
        super(props)
        this.state ={
            val:''
        }
    }
    render() {
        let {val} = this.state
        return (
            <div>
                <input value={val} onChange = {this.headKeydown.bind(this)} onKeyDown={this.headonKeyDown.bind(this)} />
            </div>
        )
    }

    headKeydown(e){
        // console.log(e.target.value)
        this.setState({val:e.target.value})
    }

    headonKeyDown(e){
       if(e.keyCode == 13){
            // console.log (this.state.val)

            bus.emit('add',{val:this.state.val,isChecked:false,falg:false })
            this.setState({val:''})
       }
    }
}
