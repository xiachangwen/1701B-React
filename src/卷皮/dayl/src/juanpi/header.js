import React from 'react';


export default  function Header(props){
    let {header} = props
    // console.log(header)

    return <div className="headder">
        <h1>{header.title}</h1>
        <div className="head">
        <p>￥ {header.pic} <b>{header.pin}</b></p>
        <span>促销：{header.chux}</span>
        </div>
    
    </div>
}