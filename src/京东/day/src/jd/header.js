import React from 'react';

export default function Header(props) {
    let {header} = props
    console.log(header)

    return <div className = "header" >
            <h3>{header.title}</h3>
            <dl>
                <dt>
                    <img src={header.img} />
                </dt>
                <dd>
                    {header.tit}
                </dd>
            </dl>

        </div>

}