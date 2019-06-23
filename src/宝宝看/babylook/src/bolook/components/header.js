import React, { Component } from 'react'

export default class Header extends Component {

    static defaultProps ={
        flag:false,
        title:'宝宝看'
    }

    render() {
        let {flag, title} = this.props
        return (
            <header>
                {
                  flag ?  <span>&lt;</span> : null
                }
                <p>{title}</p>
            </header>
        )
    }
}
