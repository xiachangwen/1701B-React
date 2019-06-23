import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

export default function RouterViews(props) {
    let {routes} = props
    let routerArr = routes && routes.filter(item => !item.redirect)
    let redirectArr = routes && routes.filter(item => item.redirect).map((item,index) => <Redirect key={index} from={item.path} to={item.redirect} />)
    return <Switch>
                {
                    routerArr && routerArr.map((item,index) => <Route key={index} path={item.path} render={(props) =>{
                        return <item.component {...props} child={item.children}  />
                    }} />).concat(redirectArr)
                }
                
            </Switch>
}
