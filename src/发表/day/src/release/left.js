import React from 'react'
import bus from '../ulite/buesrt'


export default class Left extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            val:'',
            text:'',
            
        }
    }


    render(){
        let {val, text} = this.state
        return <div className="left">
            <div className="left-top">
                <p>
                    <label>用户名：</label>
                    <input name='val' value={val} onChange = {this.handChange.bind(this)} />
                </p>
                <p>
                    <label>评论内容：</label>
                    <textarea name='text' value={text} onChange = {this.handChange.bind(this)}></textarea>
                </p>

                <button onClick = {this.headClick.bind(this)}>发布</button>
            </div>
           
        </div>
    }

    handChange(e){
        let name = e.target.name;
        let value = e.target.value
        
        this.setState({
        [name]: value
        });
    }

  

    headClick(e){
       
        let obj = {
            val:this.state.val,
            text:this.state.text
        }
        // this.props.add(obj)
        bus.emit('add',obj)
        this.setState({val:'',text:''})
    }
}