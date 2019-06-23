import React from 'react';
import bus from '../utlis/bus'


export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ind:0
        }
    }

    render(){
        let {list} = this.props
        let {ind} = this.state

        // console.log(ind)
        return <div className="mainleft">

        <ul>
            {
                list.map((item,index) => <li className={index == ind ? 'active':''} key={index} onClick={this.headClick.bind(this,index,item)}>{item.type}</li>)
            }
        </ul>
    
        </div>
    }

    headClick(index,obj){
        let {list} = this.props
        let {ind} = this.state

            this.setState({
                ind:index
            })
            bus.emit('add',obj)
    }
    
    componentDidMount() {
        // let {list} = this.props
        // let {ind} = this.state

        // bus.on('add',(num) => {
        //     console.log(num)
        // })

        
        
    }
    
}