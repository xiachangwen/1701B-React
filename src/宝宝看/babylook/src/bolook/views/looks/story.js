import React, { Component } from 'react'

import axios from 'axios'
import List from '../../components/list'


export default class Story extends Component {

    state = {
        list:[]
    }

    render() {
        let {history} = this.props
        let {list} = this.state
        return (
            <div className='ment'>
                <div className="sonter">
                    {
                        list && list.map((item,index) =>  <List key={index} item={item} index={index} flag={true} dite={true} netr={true} history={history} />)
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getvideos&pagesize=30&collectid=27').then(({data:{list}}) =>{
            // console.log(list)
            list.splice(list[0],1)
            this.setState({list:list})

        })
    }
}
