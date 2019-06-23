import React, { Component } from 'react'
import { Route, NavLink, Redirect} from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'

import RouterView from '../router/routerView'
// import Hot from './sublevel/hot'
// import Release from './sublevel/release'

export default class Film extends Component {
    render() {
        let {child, history} = this.props
        // console.log(this.props)
        return (
            <>
                <Header defg={false} title='猫眼电影'/>
                <div className="main">

                    <div className="ment">
                        <a onClick={this.headClick.bind(this,history)}>北京</a>
                        <NavLink to='/film/hot'>正在热映</NavLink>
                        <NavLink to='/film/release'>即将上映</NavLink>
                        <a onClick={()=>{
                            history.push('/search')
                        }}>搜索</a>

                    </div>
                        <RouterView ReacrRouter={child} />
                        {/* <Route path="/film/hot" component={Hot} />
                        <Route path="/film/release" component={Release} />
                        <Redirect from='/film' to='/film/hot' /> */}
                
                </div>
                
                <Footer/>
            </>
        )
    }

    headClick(history){
        // console.log(this.props)
        history.push('/city')
    }
}
