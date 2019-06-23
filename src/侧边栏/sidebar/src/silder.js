import React from 'react'

export default function Silder (props){
    let {data} = props
    console.log(data)

    return <ul>
        {
           data && data.map((item,index) => {
                return <li key={index}>{item}</li>
            })
        }
    </ul>
}