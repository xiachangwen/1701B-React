import React, { Component } from 'react'

import axios from 'axios'
import List from '../../components/list'

 
export default class Nursery extends Component {

    state = {
        list:[]
    }

    render() {
        let {history} = this.props
        let {list} = this.state
        // console.log(list)
        return (
            <div className="ment">
                <div className="sonter">
                    {
                        list && list.map((item,index) =>  <List key={index} item={item} index={index} flag={true} dite={true} netr={true} history={history} />)
                    }
                </div>
             
              
            </div>
        )
    }

    componentDidMount() {
        axios.get("http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=29").then(({data:{list}}) =>{
             list.splice(list[0],1)
            // console.log(arr)
            // console.log(list)

            this.setState({list:list})
        })
    }
}
