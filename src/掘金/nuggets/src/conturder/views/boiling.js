import React, { Component } from 'react'
import Header from '../component/header'

import {NavLink}  from 'react-router-dom'


import RouterViews from '../router/routerViews'



export default class Boiling extends Component {
    render() {
        let {child,history} = this.props
        // console.log(child)
        
        return (
            <>
                <Header  history={history}/>
                <div className="main">
                    <div className='boiling'>
                        <div className="boil">
                            <NavLink to='/boiling/recommend'>推荐</NavLink>
                            <NavLink to='/boiling/dynamic'>动态</NavLink>
                        </div>
                            <RouterViews routes={child} />
                    </div>
                    
                </div>  
            </>
        )
    }
}
