import React from 'react';
import bus from '../utlis/bus'


export default class Rigth extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bylist:[]
        }
    }

    render(){
       
        let {bylist} = this.state
         
        return <div className="mainrigth">
            {
                bylist && bylist.map((item,index) => {
                   return <dl key={index}>
                        <dt>
                            <img src={item.image} />
                        </dt>
                        <dd>
                            <p>{item.csShowName}</p>
                            <p>{item.dealerPrice}</p>
                        </dd>
                    </dl>

                    
                })
                
            }
        </div>
    }

    
    componentDidMount() {
        bus.on('add',(obj)=>{
            console.log(obj)
            let {bylist} = this.state
            this.setState({
                bylist:obj.data
            })
        })
    }
    
}