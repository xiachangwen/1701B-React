import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


import RouterViews from '../routers/routerViews'
import {NavLink} from 'react-router-dom'


export default class Hear extends Component {
    render() {
        // console.log(this.props)
        let {child} = this.props

        return (
            <>
            <Header flag={false} title='宝宝听' />
            <div className='main'>
                <div className="maintop">
                    <p>
                        <NavLink to='/hear/hymes'>儿歌</NavLink>
                        <NavLink to='/hear/routine'>故事</NavLink>
                    </p>
                </div>
                <RouterViews routes={child} />

            </div>
            <Footer />
            </>
        )
    }
}
