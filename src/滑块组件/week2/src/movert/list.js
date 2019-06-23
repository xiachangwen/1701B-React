import React, { Component } from 'react'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indX:0,
            indY:13,
            difx:0,
            dify:0,
            position: 'absolute',
            top:'-7px',
            left:'20px'
        }
    }

    render() {
        let {position,top,left} = this.state
        let {indX,indY} = this.state
        let {width} = this.props
        console.log(width)

        return (
            
            <p style={{position,top,left}} onMouseDown={this.headonMous.bind(this)}><b>{indY}</b></p>
                 
        )
    }

    headonMous=(e)=>{
        // console.log(1)
        let {indX,indY,difx,dify} = this.state

        let {clientX,clientY} = e

        difx = clientX
        dify = clientY

        this.setState({
            difx:difx,
            dify:dify
        })
        document.addEventListener('mousemove', this.headmouser,false)
        document.addEventListener('mouseup',this.dmouseup,false)
    }

    headmouser = (e) => {
        let {indx,indY,difx,dify} = this.state
        let {width} = this.props


        // console.log(width)

        let diffx = e.clientX - difx
      
       
        if(diffx < 0){
           diffx = 0
        }else if(diffx > width){
            diffx = width
        }
        indY =  Math.floor((diffx / width) * 100) 

        this.setState({
            left: diffx ,
            indY:indY
        })
    }

    dmouseup = () => {
        document.removeEventListener('mousemove', this.headmouser,false)
        document.removeEventListener('mouseup',this.dmouseup,false)
    }
}
