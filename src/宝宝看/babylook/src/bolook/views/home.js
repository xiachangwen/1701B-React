import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import {NavLink} from 'react-router-dom'
import RouterViews from '../routers/routerViews'


export default class Home extends Component {
    render() {
        // console.log(this.props)
        let {child} = this.props
        return (
            <>
                <Header flag={false} title='宝宝看' />
                <div className='main'>
                    <div className="main-top">
                        <NavLink to='/home/nursery'>儿歌</NavLink>
                        <NavLink to='/home/story'>故事</NavLink>
                        <NavLink to='/home/cartoon'>动画片</NavLink>
                    </div>
                    <RouterViews routes={child} />
                </div>
                <Footer />
            </>
        )
    }
}
