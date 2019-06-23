import React,{Component} from 'react'

export default function Islogin(Com) {
    return class  extends Component {
    
        state = {
            islogin:false
        }
    
        render(){
           
            return this.state.islogin ? <Com  {...this.props} /> : null
        }
    
        componentDidMount() {
            let {history} = this.props
            let user = window.localStorage.user
            if(user){
                this.setState({islogin:!this.state.islogin})
            } else {
                history.push('/login')
            }
        }
    
    }
    
}
