import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/shpoing'>购物车</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </footer>
        )
    }
}
