import React, { Component } from 'react'
import List from './list'

export default class Sonert extends Component {
    constructor(props){
        super(props)
        this.state = {
            indX:0,
            indY:13,
            difx:0,
            dify:0,
            position: 'absolute',
            top:'-7px',
            left:null,
            width:0
        }
       
    }


    render() {
        // console.log(this.props.left)
        let {indX,indY} = this.state
        let {position,top,left,width} = this.state
        return (
            <div className="sonert">
                <div className="menter" ref>
                    <span style={{position,top,left}} onMouseDown={this.headonMousedown.bind(this)} ref><b>{indX}</b></span>
                    <List width={width} />
                </div>
            </div>
        )
    }

    //鼠标按下
    headonMousedown(e){
        let {indX,indY,difx,dify,width} = this.state

        let {clientX,clientY} = e

        difx = clientX
        dify = clientY

        this.setState({
            difx:difx,
            dify:dify
            
        })
        document.addEventListener('mousemove', this.headmousemove,false)
        document.addEventListener('mouseup',this.headmouseup,false)
    }

    //移动
    headmousemove = (e) =>{
        
        let {indX,indY,difx,dify,width} = this.state

    
        let diffx = e.clientX - difx
      
       
        if(diffx < 0){
           diffx = 0
        }else if(diffx > width){
            diffx = width
        }
        indX =  Math.floor((diffx / width) * 100) 

        this.setState({
            left: diffx ,
            indX:indX
        })
    }

    //鼠标抬起
    headmouseup = () =>{
        let oSpan = this.refs.true
        oSpan.removeEventListener('mousedown', this.headonMousedown,false)
        document.removeEventListener('mousemove', this.headmousemove,false)
        document.removeEventListener('mouseup',this.headmouseup,false)
    } 

    componentDidMount(){
        
        let oDiv = this.refs.true
        let width = oDiv.offsetWidth
        this.setState({
            width:width
        })
    }


    // headonMous=(e)=>{
    //     // console.log(1)
    //     let {indX,indY,difx,dify} = this.state

    //     let {clientX,clientY} = e

    //     difx = clientX
    //     dify = clientY

    //     this.setState({
    //         difx:difx,
    //         dify:dify
    //     })
    //     document.addEventListener('mousemove', this.headmouser,false)
    //     document.addEventListener('mouseup',this.dmouseup,false)
    // }

    // headmouser = (e) => {
    //     let {indx,indY,difx,dify} = this.state

    //     let oDiv = this.refs.true
    //     let width = oDiv.offsetWidth

    //     let diffx = e.clientX - difx
      
       
    //     if(diffx < 0){
    //        diffx = 0
    //     }else if(diffx > width){
    //         diffx = width
    //     }
    //     indY =  Math.floor((diffx / width) * 100) 

    //     this.setState({
    //         left: diffx ,
    //         indY:indY
    //     })
    // }

    // dmouseup = () => {
    //     document.removeEventListener('mousemove', this.headmouser,false)
    //     document.removeEventListener('mouseup',this.dmouseup,false)
    // }
}
