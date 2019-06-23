import React, { Component } from 'react'

import Header from '../component/header'
import Footer from '../component/footer'

export default class My extends Component {
    render() {
        return (
            <>  
            <Header flag={false} title='我的' />
            <div className="main">我的</div>

            <Footer />
        </>
        )
    }
}
