import React, { Component } from 'react'

import Header from '../header'
import Footer from '../footer'
import islogin from '../conponent/islogin'

// class IsLogin extends Component {
    
//     state = {
//         islogin:false
//     }

//     render(){
       
//         return this.state.islogin ? <My /> : null
//     }

//     componentDidMount() {
//         let {history} = this.props
//         let user = window.localStorage.user
//         if(user){
//             this.setState({islogin:!this.state.islogin})
//         } else {
//             history.push('/login')
//         }
//     }

// }

 class My extends Component {
    render() {
      
        return (
            <>
                <Header defg={false} title='我的'/>
                <div className="main">我的</div>
                <Footer/>
            </>
        )
    }
}

export default islogin(My);
