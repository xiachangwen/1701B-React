import Mock from 'mockjs'
import data from '../data/hot.json'
import release from '../data/release.json'

// const Mock = require('mockjs')
 Mock.mock('/api/hot',{
    data
    
})

Mock.mock('/api/release',{

    release
})

Mock.mock('/api/login',(res) => {
    let {name, pwd} = JSON.parse(res.body)
    // console.log(name, pwd)
    // console.log(res.body)
    if(name == "zhangsan" && pwd == "12345"){
        return {
            code:1,
            mag:'成功'
        }
    } else{
        return {
            code:0,
            mag:'失败'
        }   
    }

})