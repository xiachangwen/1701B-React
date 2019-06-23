import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// import Home from '../views/home'
import routes from './routerlist'
import RouterViews from './routerViews'

export default class RoorRouter extends Component {
    render() {
        return <Router>
            <RouterViews routes={routes} />
        </Router>
    }
}
