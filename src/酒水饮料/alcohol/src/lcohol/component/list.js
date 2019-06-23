import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let {item,history} = this.props
        // console.log(this.props)
        return <dl onClick={this.headClick.bind(this,history,item.id)}>
            <dt>
                <img src={item.img} />
            </dt>
            <dd>
                <span>{item.title}</span>
                <b>￥{item.pic}</b>
            </dd>
        </dl>
    }

    headClick(history,id){
        history.push('/details/'+id)
    }

  
}
