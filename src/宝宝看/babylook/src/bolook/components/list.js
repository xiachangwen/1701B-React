import React, { Component } from 'react'

export default class List extends Component {
    
    render() {
        let {item,index,flag, dite, netr, history} = this.props
        
        return <dl className={ netr ? '' : 'actvie'} onClick={()=>{
            history.push(`/details/${item.id}`)
        }}>
            {
               dite ?  <dt><img src={item.pic} /></dt> : <b>{index + 1}</b>
            }

            <dd>
                <h3>{ dite ? <span>{index + 1}.</span> : null} {item.name}</h3>
                { flag ? <p><span>{item.artist}</span><span>播放：{item.playcnt}</span></p> : <p>共{item.tracks}集</p>}
            </dd>
        </dl>
    }
}
