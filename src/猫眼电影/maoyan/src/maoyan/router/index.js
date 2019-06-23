import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// import Film from '../views/film' 
// import Cinema from '../views/cinema' 
// import My from '../views/my' 
// import City from '../views/city'
// import Search from '../views/search'
// import Details from '../views/details'

import ReacrRouter from '../conponent/reacrRouter'
import RouterView from './routerView'

 
export default function RootReact() {

    // let reacrRouterArr = ReacrRouter.filter(item => !item.redirect)
    // let reacrRouterSrr = ReacrRouter.filter(item => item.redirect).map((item1,index) => <Redirect key={index} from={item1.path} to={item1.redirect} />)
   
   return <Router>
        <RouterView ReacrRouter={ReacrRouter} />
        {/* <Switch> */}
            {/* {
                reacrRouterArr && reacrRouterArr.map((item,index) => <Route key={index} path={item.path} component={item.component} />).concat(reacrRouterSrr)
            } */}
            
            {/* <Route path='/cinema' component={Cinema} />
            <Route path='/my' component={My} />
            <Route path='/city' component={City} />
            <Route path='/search' render={() => {
                return <Search />
            }} />
            <Route path='/details/:id' component={Details} />

            <Route path='/' component={Film} />
            
            <Redirect from='/' to='/film' /> */}
        {/* </Switch> */}
    </Router>
}
