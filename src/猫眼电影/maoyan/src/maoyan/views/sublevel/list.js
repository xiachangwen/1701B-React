import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class List extends Component {
    
    render() {
        let {item, history, index} = this.props
        // console.log(this.props.item)
        return (
            <dl>
                <dt>
                    <img src={item.img.replace('w.h','128.180')} />
                </dt>
                <dd>
                    <p>{item.nm}</p>
                    <p>{item.sc ? <span>观众评：<b>{item.sc}</b></span>:<span><b>{item.wish}</b>人想看</span>}</p>
                    <p>主演：{item.star}</p>
                    <p>{item.showInfo}</p>
                    {item.showst == 3 ?  <p 
                    className={item.globalReleased ? 'red':'blue'} onClick={this.headelClick.bind(this,history,index,item)}>
                    {item.globalReleased ? `购票`:`预售`}
                    </p> : <p 
                    className={item.showst == 1 ? 'orange':'blue'} onClick={this.headelClick.bind(this,history,index,item)}>
                    {item.showst == 1 ? `想看`:`预售`}
                    </p>}
                </dd>
            </dl>
        )
    }

    headelClick(history,ind,item){
        // console.log(item)
        history.push(`/details/${item.id}`)
    }
}

export default withRouter(List)

// console.log()
