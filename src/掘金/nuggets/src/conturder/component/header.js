import React, { Component } from 'react'
import {NavLink}  from 'react-router-dom'
 

export default class Header extends Component {

    state ={
         flag:false,
         tilt:''
    }
    render() {
       
        let {flag,tilt} =  this.state
        let {history} = this.props
        return (
            <header>
                <div>
                    <p>掘金</p>
                    <div className="divp" onClick={()=>{
                        this.setState({flag:!flag})
                    }}>
                        <b>{tilt ? tilt : '首页'}</b>
                        <p style={{display: flag ? 'block' : 'none'}} onClick={(e)=>{
                            console.log(e.target.innerHTML)
                            this.setState({tilt:e.target.innerHTML})
                        }}>
                            <NavLink to='/home'>首页</NavLink>
                            <NavLink to='/boiling'>沸点</NavLink>
                            <NavLink to='/brochure'>小册</NavLink>
                            <NavLink to='/library'>开源库</NavLink>
                            <NavLink to='/activity'>活动</NavLink>
                        </p>
                    </div>
                    
                   
                </div>
                <div><span onClick={()=>{
                    history.push('/login')
                }}>登录.注册</span></div>

            </header>
        )
    }
    heaChange(e){
        console.log(e.target.value)
        this.setState({val:e.target.value})
    }

}
