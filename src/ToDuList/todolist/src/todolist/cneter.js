import React, { Component } from 'react'
import bus from '../utlis/bus'


export default class Cneter extends Component {
    constructor(props) {
        super(props)
        this.state ={
            list:[],
            bylist:[],
            cont:''
        }
    }

    render() {
        let {list,bylist,cont} = this.state 
        // console.log(list)
        return (
            <div>
                <div className="main">
                <h3>正在进行  <span>{list.length}</span> </h3>
                    {
                        list && list.map((item,index) => {
                        return <p key={index}> <input type='checkbox' 
                        checked={item.isChecked} 
                        onChange={this.hedchange.bind(this)} 
                        onClick={this.headClick.bind(this,index)}
                        /> 
                        {item.flag ? <input className="inpu" value={cont} onChange={this.onChangEcid.bind(this)} onKeyDown={this.headKey.bind(this,index)} /> : <span>{item.val}</span>}
                        <span onClick={this.editCilck.bind(this,index,item)}>编辑</span>
                        <span onClick={this.clickFn.bind(this,index)}>删除</span>
                        </p>
                        })
                    }
                </div>

                <div className="ment">
                <h3>已经完成   <span>{bylist.length}</span></h3>
                    {
                        bylist && bylist.map((item,index) => {
                        return <p key={index}> 
                        <input type='checkbox' 
                        checked={item.isChecked} onChange={this.hedchange.bind(this)} 
                        onClick={this.headClickfn.bind(this,index)}
                        /> 
                        {item.flag ? <input className="inpu" value={cont} onChange={this.onChangEcid.bind(this)} onKeyDown={this.headKeydown.bind(this,index)} /> : <span>{item.val}</span>}
                        <span onClick={this.eDitCilck.bind(this,index,item)}>编辑</span>
                        <span onClick={this.clickFner.bind(this,index)}>删除</span> 
                        </p>
                        })
                    }
                
                </div>

            </div>
        )
    }

    hedchange(){}
    onChangEcid(e){
        let {cont} = this.state
        this.setState({cont:e.target.value})
    }

    headKey(ind,e){
        if(e.keyCode == 13){
            let {list,cont} = this.state
            list[ind].flag = false
            list[ind].val = cont
            // console.log(list[ind])
            this.setState({list,cont:''})
        }
    }

    headKeydown(ind,e){
        if(e.keyCode == 13){
            let {bylist,cont} = this.state
            bylist[ind].flag = false
            bylist[ind].val = cont
            // console.log(bylist[ind])
            this.setState({bylist,cont:''})
        }
    }

    headClick(ind){
        let {list,bylist} = this.state
        let ite = list[ind]
        ite.isChecked = true
        bylist.push(list[ind])
        list.splice(ind,1)
        this.setState({bylist})   
    }

    headClickfn(ind){
        let {list,bylist} = this.state
        let ite = bylist[ind]
        ite.isChecked = false
        list.push(bylist[ind])
        bylist.splice(ind,1)
        this.setState({list})   
    }

    clickFn(ind){
        let {list} = this.state
        list.splice(ind,1)
        this.setState({list})
        // console.log(ind)
    }
    clickFner(ind){
        let {bylist} = this.state
        bylist.splice(ind,1)
        this.setState({bylist})
        // console.log(ind)
    }

    editCilck(ind,obj){
        let {list,cont} = this.state
        list[ind].flag = true
        this.setState({list})
    }

    eDitCilck(ind){
        let {bylist,cont} = this.state
        bylist[ind].flag = true
        this.setState({bylist})
    }

    
    componentDidMount() {
        bus.on('add', (obj) => {
            // console.log(obj)
            let {list} = this.state
            this.setState({list:[...list,obj]})

        })
    }
    

}
