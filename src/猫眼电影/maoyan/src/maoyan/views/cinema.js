import React, { Component } from 'react'

import Header from '../header'
import Footer from '../footer'

export default class Cinema extends Component {
    render() {
        return (
            <>
                <Header defg={false} title='影院'/>
                <div className="main">影院</div>
                
                <Footer/>
            </>
        )
    }
}
