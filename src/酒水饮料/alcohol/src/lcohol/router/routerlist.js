import React from 'react'

import Loadable from 'react-loadable'

const loading = () => {
    return <div>
        <img src={require('../../images/loading.gif')} />
    </div>
}
const Home = Loadable({
    loader: () => import('../views/home'),
    loading: loading
})
const Shpoing = Loadable({
    loader: () => import('../views/shpoing'),
    loading: loading

})

const My = Loadable({
    loader: () => import('../views/my'),
    loading: loading

})
const Details = Loadable({
    loader: () => import('../views/details'),
    loading: loading

})



const routes = [
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home
    },{
        path:'/shpoing',
        component:Shpoing
    },{
        path:'/my',
        component:My
    },{
        path:'/details/:id',
        component:Details
    }
]


export default routes