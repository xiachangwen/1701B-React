import React, { Component } from 'react'
import '../mock/mock'
import axios from 'axios'
import Header from '../component/header'

export default class Details extends Component {
    
    state = {
        list:[]
    }
    render() {
        let {list} = this.state
        // console.log(this.props)

        return (
            <>
                <Header  flag={true} title='商品详情' />
            <div className="main">
                <div className="redater">
                    <img src={list.img} />
                    <p>{list.title}</p>
                    <p>￥{list.pic}</p>
                </div>
            </div>

            </>
        )
    }
    componentDidMount() {
        let {id} = this.props.match.params
        axios.post('/api/itemr',id).then((res) => {
            // console.log(res.data)
            this.setState({list:res.data})
        })
    }
}
