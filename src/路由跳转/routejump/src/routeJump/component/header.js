import React, { Component } from 'react'

import {NavLink, Route, Redirect} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/staff'>员工管理</NavLink>
                <NavLink to='/work'>工作计划</NavLink>
                <NavLink to='/customer'>客户管理</NavLink>
            </div>
        )
    }
}
