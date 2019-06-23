import React, { Component } from 'react'

import Header from '../component/header'
import Footer from '../component/footer'

import List from '../component/list'

import axios from 'axios'
import '../mock/mock'

export default class Home extends Component {

    state = {
        list:[]
    }

    render() {
        let {list} = this.state
        let {history} = this.props
        return (
            <>  
                <Header flag={false} title='酒水饮料' />
                <div className="main">
                    <div className='ment'>
                        {
                            list && list.map((item,index) =>  <List key={index} item={item} history={history} />)
                        }
                    </div>
                   
                </div>

                <Footer />
            </>
        )
    }

    componentDidMount() {
        axios.get('/api/list').then(({data:{list}})=>{
            // console.log(list.list)
            this.setState({list:list.list})
        })
    }
}
