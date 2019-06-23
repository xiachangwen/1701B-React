import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

import isLogin from '../components/isLogin'



 class My extends Component {
    render() {
        return (
            <>
                <Header flag={false} title='我的' />
                <div className='main'>
                    <div className="menterd">
                        <div>
                            <p>我的下载</p>
                            <p>我的收藏</p>
                        </div>
                        <div>
                            <p>清除缓存</p>
                            <p>关于我们</p>
                        </div>
                        
                        <div><button>退出应用</button></div>
                        
                    </div>
                
                </div>
                <Footer />
            </>
        )
    }
}

export default isLogin(My)
