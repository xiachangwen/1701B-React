import React from 'react'
import Silder from './silder'

export default class Sidebar extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     isflag:false,
        //     ind:0
        // }
    }


    render(){
        let {list} = this.props
        // let {isflag,ind} = this.state
        console.log(list)
        return <div className="sidebar">
        {
           list && list.map((item,index) => {
                return <div key={index}>
                
                    <h3 onClick={()=>{
                           this.props.add(index)
                    }}>{item.title}</h3>
                    {
                        item.isShow && item.children ? <Silder data={item.children} /> : null
                    }
                    {/* <Silder data={list[ind].children}/> */}
                    
                </div>
            })
        }
            

        </div>
    }
}