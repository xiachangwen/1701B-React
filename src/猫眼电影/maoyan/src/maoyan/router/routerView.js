import React from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

export default function RouterView(props) {
    let {ReacrRouter} = props
    // console.log(ReacrRouter)
    let reacrRouterArr = ReacrRouter.filter(item => !item.redirect)
    let reacrRouterSrr = ReacrRouter.filter(item => item.redirect).map((item1,index) => <Redirect key={index} from={item1.path} to={item1.redirect} />)
   
   return <Switch>
            {
                reacrRouterArr && reacrRouterArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children} />
                }} />).concat(reacrRouterSrr)
            }
            
        </Switch>
}
