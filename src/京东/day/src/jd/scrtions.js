import React from 'react';

export default class Sctions extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ind:0
        }
    }

    render(){
        let {conter} = this.props
        let {ind} = this.state
        // console.log(conter)
        return <div className="section">
                <ol>
                    {
                        conter.map((item, index) => <li key={index} onClick = {() => {
                            this.setState ({
                                ind:index
                            })
                        }} className={index == ind? 'active' : ''}>{item.title}</li>)
                    }
                </ol>
                <dl>
                    <dt>
                        <img src={conter[ind].img} />
                    </dt>
                    <dd>
                        <p>{conter[ind].titl}</p>

                        <ul>
                            {
                                conter[ind].link.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ul>
                    </dd>
                </dl>
        
        
        </div>
    }

}