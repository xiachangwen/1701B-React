import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/home'>宝宝看</NavLink>
                <NavLink to='/hear'>宝宝听</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </footer>
        )
    }
}
