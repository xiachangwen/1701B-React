import React, { Component } from 'react'

import islogin from '../conponent/islogin'

 class Details extends Component {
    render() {
        // console.log(this.props.match.params.id)
        return (
            <div className="details">
                详情页{this.props.match.params.id}
            </div>
        )
    }
}


export default islogin(Details)