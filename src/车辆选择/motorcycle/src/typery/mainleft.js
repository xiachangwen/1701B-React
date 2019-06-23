import React from 'react';
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
                list.map((item,index) => <li className={index == ind ? 'active':''} key={index} onClick={()=>{
                    this.setState({
                        ind:index
                    })
                    this.props.add(index)
                }}>{item.type}</li>)
            }
        </ul>
    
        </div>
    }
}