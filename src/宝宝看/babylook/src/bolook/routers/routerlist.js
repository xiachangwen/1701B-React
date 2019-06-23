import React from 'react'

import Loadable from 'react-loadable'

const loading = () => {
    return <div>
        <img src={require('../../images/loading.gif')} />
    </div>
}

const Home = Loadable({
    loader: () => import('../views/home'), //宝宝看
    loading:loading
})
const Hear = Loadable({
    loader: () => import('../views/hear'), //宝宝听
    loading:loading
})
const My = Loadable({
    loader: () => import('../views/my'), //我的
    loading:loading
})
const Login = Loadable({
    loader: () => import('../views/login'), //登录
    loading:loading
})
const Cartoon = Loadable({
    loader: () => import('../views/looks/cartoon'), //动画片
    loading:loading
})
const Nursery = Loadable({
    loader: () => import('../views/looks/nursery'),//儿歌
    loading:loading
})
const Story = Loadable({
    loader: () => import('../views/looks/story'),//故事
    loading:loading
})
const Hymes = Loadable({
    loader: () => import('../views/hears/hymes'), //听儿歌
    loading:loading
})
const Routine = Loadable({
    loader: () => import('../views/hears/routine'), //听故事
    loading:loading
})
const Details = Loadable({
    loader: () => import('../views/details'), //详情
    loading:loading
})
const List = Loadable({
    loader: () => import('../components/list'), //列表
    loading:loading
})



const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/nursery',
                component:Nursery
            },{
                path:'/home/story',
                component:Story
            },{
                path:'/home/cartoon',
                component:Cartoon
            },{
                path:'/home',
                redirect:'/home/nursery'
            }
        ]
    },{
        path:'/hear',
        component:Hear,
        children:[
            {
                path:'/hear/hymes',
                component:Hymes
            },{
                path:'/hear/routine',
                component:Routine
            },{
                path:'/hear',
                redirect:'/hear/hymes'
            }
        ]
    },{
        path:'/my',
        component:My
    },{
        path:'/login',
        component:Login
    },{
        path:'/details/:id',
        component:Details
    },{
        path:'/list',
        component:List
    }
]

export default routes