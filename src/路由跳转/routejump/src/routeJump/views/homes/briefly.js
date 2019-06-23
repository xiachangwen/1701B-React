import React, { Component } from 'react'

import {NavLink, Route, Redirect} from 'react-router-dom'

import RouterViews from '../../router/routerViews'


// import Bketch from './bketch'
// import Bpoints from './bpoints'

export default class Briefly extends Component {
    render() {
        let {child} = this.props
        return (
            
            <div className="briefly">
                <div className="ment">
                    <NavLink to="/home/briefly/bketch">简述</NavLink>
                    <NavLink to="/home/briefly/bpoints">要点</NavLink>
                </div>

                <div className="mentr">
                    <RouterViews routes={child} />
                </div>
                
            </div>
        )
    }
}
