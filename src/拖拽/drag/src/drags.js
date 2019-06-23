import React from 'react'


export default class Drag extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            left:0,
            top:0,
            disx:0,
            disy:0
        }
    }

    static defaultProps = {
        width:'100px',
        height:'100px',
        background:'red',
        position: 'absolute'
    }


    render(){
        let {width,height,background,position} = this.props
        let {left,top} = this.state
        // console.log(this.props)
        return <div className="drag" style={{width,height,background,position,left,top}} onMouseDown={this.mousedown}>
        
        </div>
    }

    mousedown = (e) => {
        let {left,top,disx,disy} = this.state
        let {clientX, clientY} = e
        console.log(clientX, clientY)
        disx = clientX - left
        disy = clientY - top
        console.log(disx,disy)
        this.setState({disx,disy})

        document.addEventListener('mousemove', this.mousemoves,false)
        document.addEventListener('mouseup',this.mouseups,false)
    }

    mousemoves = (e) => {
        let {clientX, clientY} = e
        let {left,top,disx,disy} = this.state

        console.log(clientX, clientY)
        left = clientX - disx
        top = clientY - disy
        this.setState({left,top})
    }

    mouseups = () => {
        document.removeEventListener('mousemove', this.mousemoves,false)
        document.removeEventListener('mouseup',this.mouseups,false)
    }

}