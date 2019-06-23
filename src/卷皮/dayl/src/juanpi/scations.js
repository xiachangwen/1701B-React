import React from 'react';

export default class Scations extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ind:0
        }
    }

    render(){
        let {color, size, conter} = this.props.senter
        let {ind} = this.state
        console.log(this.props)
        return <div className="scations">
            <div className="scrten">
                <ul>
            颜色：

                    {
                        color.map((item, index) => <li key={index} onClick={() =>{
                            this.setState({
                                ind:index
                            })
                        }} className={index == ind ? 'active' :''}>{item.title}</li>)
                    }
                </ul>

                <div className="lefter"><img src={color[ind].img} /></div>
            </div>

            <div className="sizer">
                尺码：
                {
                    size.map((item, index) => <span key={index}>{item}</span>)
                }
            </div>
            
            <div className='conter'>
                <span onClick={() => {
                    this.props.add(conter-1)
                }}>-</span>
                <span>{conter}</span>
                <span onClick={() => {
                    this.props.add(conter+1)
                }}>+</span>
                
            </div>
        
        
        </div>
    }
}