import React, { Component } from 'react'
import {NavLink, Route, Redirect} from 'react-router-dom'

import RouterViews from '../../router/routerViews'

// import Sarration from './sarration'
// import Summary from './summary'

export default class Survey extends Component {
    render() {
        let {child} = this.props

        return (
            <div className="survey">
               <div className="ment">
                    <NavLink to="/home/survey/sarration">叙述</NavLink>
                    <NavLink to="/home/survey/summary">概述</NavLink>
                </div>

                <div className="mentr">
                <RouterViews routes={child} />

                </div>
            </div>
        )
    }
}
