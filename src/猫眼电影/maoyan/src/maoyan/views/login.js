import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'

export default class Login extends Component {

    state = {
        name:'',
        pwd:''
    }

    render() {
        let {name, pwd} = this.state
        return (
            <div className="loginer">
                <input placeholder="请输入账号" value={name} onChange={this.headeName.bind(this)} />
                <input placeholder="请输入密码" value={pwd} onChange={this.headecPwd.bind(this)} />
                <button onClick={this.headOnclick.bind(this)}>登录</button>
            </div>
        )
    }

    headeName(e){
        this.setState({name:e.target.value})
    }
    headecPwd(e){
        this.setState({pwd:e.target.value})

    }

    headOnclick(){
        let {name, pwd} = this.state
        let obj = {
            name:name,
            pwd:pwd
        }
    
        axios.post('/api/login',{name,pwd}).then(({data}) => {
            // console.log(data)
            if(data.code == 1){
                window.localStorage.setItem('user', JSON.stringify(obj))
                window.history.go(-1)
            } else {
                alert(data.mag)
            }
        })
    }
}
