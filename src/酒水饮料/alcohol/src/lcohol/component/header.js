import React, { Component } from 'react'

export default class Header extends Component {

    static defaultProps = {
        flag:false,
        title:'标题'
    }

    render() {
        let {flag,title} = this.props
        return (
            <header>
                {
                    flag ? <span onClick={this.headClick.bind(this)}>&lt;</span> : null
                }
                <p>{title}</p>
            </header>
        )
    }

    headClick(){
        window.history.go(-1)
    }
}
