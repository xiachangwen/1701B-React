import React from 'react'
import Loadable from 'react-loadable'

// import Home from '../views/home'

const loading = () =>{
    return <div>loadimg........</div>
}

const Home = Loadable({
    loader: () => import('../views/home'),
    loading:loading
})
const Login = Loadable({
    loader: () => import('../views/login'),
    loading:loading
})
const Boiling = Loadable({
    loader: () => import('../views/boiling'), //沸点
    loading:loading
})
const Brochure = Loadable({
    loader: () => import('../views/brochure'), //小册
    loading:loading
})
const Library = Loadable({
    loader: () => import('../views/library'),  //开源库
    loading:loading
})
const Activity = Loadable({
    loader: () => import('../views/activity'), //活动
    loading:loading
})
const Recommend = Loadable({
    loader: () => import('../views/recommend'), //推荐
    loading:loading
})
const Dynamic = Loadable({
    loader: () => import('../views/dynamic'), //动态
    loading:loading
})


const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home
    },{
        path:'/login',
        component:Login
    },{
        path:'/boiling',
        component:Boiling,
        children:[
            {
                path:'/boiling/recommend',
                component:Recommend
            },{
                path:'/boiling/dynamic',
                component:Dynamic
            },{
                path:'/boiling',
                redirect:'/boiling/recommend'
            }
        ]
    },{
        path:'/brochure',
        component:Brochure
    },{
        path:'/library',
        component:Library
    },{
        path:'/activity',
        component:Activity
    }
]

export default routes