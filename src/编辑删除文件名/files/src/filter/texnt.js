import React, { Component } from 'react'
import Labelt from './labelt'
import bus from '../utlis/bus'

export default class Texnt extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
            stat:false
        }
    }

    render() {
        let {data,index} = this.props
        let {flag,stat} = this.state
        // console.log(data)
        return (
            <div className={flag ? 'texntsr' :'texnt'} ref>
                <p></p>
                <span>{data.title}</span>
                <b style={{display: flag ? 'block' :'none'}} onClick={this.clickFn.bind(this,index)}>※</b>

                <div className="labelt"  style={{display: stat ? 'block' :'none'}}>
                    {
                         data.name.map((item,index) => <p key={index} onClick={this.headleClick.bind(this,item,index)}>{item}</p>)
                    }
                    <p className="pll">{data.shanc[0].tit}</p>
                </div>
            </div>
        )
    }

    clickFn(){
        this.setState({
            stat:!this.state.stat
        })
    }

    headleClick(obj){
        
        this.setState({
            flag:!this.state.flag
        })
        bus.emit('add',obj)
        
    }

    componentDidMount(){
        let oDiv = this.refs.true
        // console.log(oDiv)
        oDiv.addEventListener('mouseover',()=>{
            this.setState({flag:!this.state.flag})
        },false)
        oDiv.addEventListener('mouseout',()=>{
            this.setState({flag:!this.state.flag})
        },false)


        bus.on('changeAdd', (name) =>{
            console.log(name)
            this.props.data.title = name
        })  
    }
}
