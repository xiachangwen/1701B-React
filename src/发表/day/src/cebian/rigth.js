import React from 'react'

export default class Rigth extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        let {list} = this.props
        console.log(list)
        return <div className="rigth">
            <div className="reith-top">
            {
               list && list.map((item,index) => {
                    
                      return   <div key={index}>
                             <i>{item.val} : </i>
                            <span>{item.text}</span>
                        </div>
                       
                   
                })
            }
            </div>
        </div>
    }
}