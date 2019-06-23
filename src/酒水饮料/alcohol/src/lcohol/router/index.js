import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import RouterViews from './routerViews'
import routes from './routerlist'


export default class RootRouter extends React.Component {
    render() {
        return <BrowserRouter>
            <RouterViews routes={routes} />
        </BrowserRouter>
    }
}
