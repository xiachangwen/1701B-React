import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        name:'',
        pwd:''
    }

    render() { 
        let {name,pwd} = this.state
        return ( 
            <div className="main">
                <div className='cread'>
                    <input placeholder='用户名' value={name} onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }} />
                    <input placeholder='密码' value={pwd} onChange={(e)=>{
                        this.setState({pwd:e.target.value})
                    }} />
                    <button onClick={this.clickFn.bind(this)}>登录</button>
                </div>
                
            </div>
        )
    }

    clickFn(){
        let {name,pwd} = this.state
        let user = window.localStorage.user
        if(!user){
            window.localStorage.setItem('user',JSON.stringify({name,pwd}))
            window.history.go(-1)
        }
    }
}
