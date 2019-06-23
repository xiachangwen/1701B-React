import React, { Component } from 'react'

import '../../mock/mock'
import axios from 'axios'
import List from './list'

export default class Hot extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    render() {
        let {data} = this.state
        return (
            <div className="main-men">
                {
                    data.map((item,index) => <List key={index} item={item} index={index} />)
                }
            </div>
        )
    }

    componentDidMount() {
        axios.get('/api/hot').then(({data:{data:data}}) => {
            // console.log(data)
            this.setState({data})
        })
    }
}
