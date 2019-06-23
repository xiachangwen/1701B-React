import React, { Component } from 'react'
import Header from '../../component/header'
import {NavLink, Route, Redirect} from 'react-router-dom'

// // import Bketch from './bketch'
// // import Bpoints from './bpoints'
// import Briefly from './briefly' // 简要
// // import Sarration from './sarration'
// // import Summary from './summary'
// import Survey from './survey' // 概况
import RouterViews from '../../router/routerViews'


export default class Home extends Component {
    render() {
        let {child} = this.props
        return (
            <>
        
            <Header />
            <div className="main">
                <div className="home">
                    <NavLink to='/home/briefly'>简要</NavLink>
                    <NavLink to='/home/survey'>概况</NavLink>
                </div>
                <div className="rigth">
                   <RouterViews routes={child} />
                </div>
            </div>
            </>
        )
    }
}
