import React, { Component } from 'react'
import Header from '../component/header'


export default class Activity extends Component {
    render() {
        return (
            <>
                <Header  />
                <div className="main">
                    <div className='activity'>
                    活动
                    </div>
                </div>  
            </>
        )
    }
}
