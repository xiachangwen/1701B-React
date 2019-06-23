import React, { Component } from 'react'
import Header from '../component/header'

// import RouterViews from '../router/routerViews'


export default class Home extends Component {
    render() {
        console.log(this.props)
        let {history} = this.props
        return (
            <>
                <Header history={history} />
                <div className="main">
                    <div className='home'>
                        首页
                        
                    </div>
                </div>  
            </>
        )
    }
}
