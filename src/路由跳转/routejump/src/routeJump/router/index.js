import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import RouterViews from './routerViews'

import routes from './routerlist'

export default function RootRouter (){
   
    return <Router>
        <Switch>
           <RouterViews routes={routes} />
        </Switch>
    </Router>

}