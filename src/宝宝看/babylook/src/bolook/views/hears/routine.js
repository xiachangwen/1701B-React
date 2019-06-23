import React, { Component } from 'react'

import axios from 'axios'
import List from '../../components/list'

export default class  Routine extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state
        let {history} = this.props

        return (
            <div className="ment">
                <div className="sonter">
                    {
                        list && list.map((item,index) =>  <List key={index} item={item} index={index} flag={false} dite={false} netr={true} history={history} />)
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=6').then(({data:{list}}) => {
            // console.log(list)
            list.splice(list[0],1)
            this.setState({list})
        })
    }
}
