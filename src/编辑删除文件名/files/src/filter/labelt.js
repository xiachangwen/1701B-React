import React, { Component } from 'react'
import bus from '../utlis/bus'


export default class Labelt extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
            // name:{}
        }

    }

    render() {
        console.log(this.props)
        let {flag} = this.state
        
        return (
            <div className="labelt"  style={{display: flag ? 'block' :'none'}}>
                
            </div>
        )
    }

    
    componentDidMount() {
        // let {flag} = this.state

        // bus.on('add',(obj)=>{
        //     console.log(obj)
        //     // this.setState({
        //     //     flag:obj
        //     // })
        // })
    }
    
}
