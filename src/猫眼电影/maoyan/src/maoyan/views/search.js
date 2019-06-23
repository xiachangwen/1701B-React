import React, { Component } from 'react'

import Header from '../header'

export default class Search extends Component {
    render() {
        return (
            <div>
                <Header defg={true} title='猫眼电影' />
                搜索
            </div>
        )
    }
}
