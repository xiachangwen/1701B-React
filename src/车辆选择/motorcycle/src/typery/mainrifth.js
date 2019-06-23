import React from 'react';
export default class Rigth extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bylist:[]
        }
    }

    render(){
        let {bylist} = this.state
        let {data} = {...this.props.index}
        // this.setState({
        //     bylist:data
        // })
        // console.log(bylist)
        return <div className="mainrigth">
            {
                data && data.map((item,index) => {
                   return <dl key={index}>
                        <dt>
                            <img src={item.image} />
                        </dt>
                        <dd>
                            <p>{item.csShowName}</p>
                            <p>{item.dealerPrice}</p>
                        </dd>
                    </dl>

                    console.log(item.image)
                })
                
            }
        </div>
    }
}