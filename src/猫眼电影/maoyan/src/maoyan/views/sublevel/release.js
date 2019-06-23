import React, { Component } from 'react'

import axios from 'axios'
import List from './list'
import '../../mock/mock'

export default class Release extends Component {

    state = {
        data:[]
    }

    render() {
        let {data} = this.state

        return (
            <div className="main-men">
                {
                    data && data.map((item,index) => <List key={index} item={item} />)
                }
            </div>
        )
    }

    componentDidMount() {
        axios.get('/api/release').then(({data:{release:release}}) => {
        // console.log(release)

            this.setState({data:release})
        })
    }
}
