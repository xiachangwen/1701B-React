import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let {title, defg} = this.props
        return (
            <header>
                {
                    defg ? <span>&lt;</span> : null
                }
                <p>{title}</p>
            </header>
        )
    }
}
