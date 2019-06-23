import React, { Component } from 'react'
import isLogin from '../components/isLogin'

class Details extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                 ID为 ： {this.props.match.params.id} 的详情
            </div>
        )
    }
}

export default isLogin(Details)
