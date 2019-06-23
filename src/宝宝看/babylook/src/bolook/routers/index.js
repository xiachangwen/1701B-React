import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routerlist'
import RouterViews from './routerViews'

export default class RootRouter extends Component {
    render() {
        return <Router>

            <RouterViews routes={routes} />

        </Router>
    }
}
