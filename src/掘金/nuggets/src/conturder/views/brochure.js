import React, { Component } from 'react'
import Header from '../component/header'


export default class Brochure extends Component {
    render() {
        return (
            <>
                <Header  />
                <div className="main">
                    <div className='brochure'>
                        小册
                    </div>
                </div>  
            </>
        )
    }
}
