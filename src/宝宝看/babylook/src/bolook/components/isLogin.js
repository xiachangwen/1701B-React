import React, { Component } from 'react'

export default function IsLogin(Com) {

    return class  extends Component {

        state = {
            flag:false
        }
    
        render() {
            let {flag} = this.state
            // console.log(this.props)
            return flag ? < Com {...this.props} /> : null
        }
    
        componentDidMount() {
            let {history} = this.props

            let user = window.localStorage.user
            if(user){
                this.setState({flag:!this.state.flag})
            } else{
                history.push('/login')
            }
        }
    }
}
