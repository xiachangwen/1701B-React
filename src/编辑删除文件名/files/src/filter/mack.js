import React, { Component } from 'react'
import bus from '../utlis/bus'


export default class Mack extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:'',
            val:''
        }
    }

    render() {
        let {data,val} = this.state
        let {index} = this.props
        return (
            <div className="mack" style={{display: data ? 'block' : 'none'}}>
                <div className="mackcont">
                    <p>标题</p>
                    <div className="mack-entr">
                    {
                        data == '重命名' ? <input value={val} onChange={this.headChange.bind(this)} /> : data
                    }
                    </div>
                    <div className="butns">
                        <button onClick={this.clickFn.bind(this)}>确定</button>
                        <button>取消</button>
                    </div>
                </div>
            </div>
        )
    }

    headChange(e){

        this.setState({
            val:e.target.value
        })

       
    }

    clickFn(){
        let {val} = this.state

         bus.emit('changeAdd',val)
         this.setState({
             data:''
         })
    }

    componentDidMount(){
        // let {data} = this.state
        bus.on('add', (obj) => {
            console.log(obj)
            this.setState({
                data:obj
            })
        })
    }
}
