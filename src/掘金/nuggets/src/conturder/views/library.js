import React, { Component } from 'react'
import Header from '../component/header'


export default class Library extends Component {
    render() {
        return (
            <>
                <Header  />
                <div className="main">
                    <div className='library'>
                    开源库
                    </div>
                </div>  
            </>
        )
    }
}
