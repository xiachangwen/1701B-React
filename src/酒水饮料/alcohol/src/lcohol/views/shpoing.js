import React, { Component } from 'react'

import Header from '../component/header'
import Footer from '../component/footer'

export default class Shpoing extends Component {
    render() {
        return (
            <>  
                <Header flag={false} title='购物车' />
                <div className="main">购物车</div>

                <Footer />
            </>
        )
    }
}
