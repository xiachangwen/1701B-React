
import React from 'react'
import Loadable from 'react-loadable'

// import Film from '../views/film' 
// import Cinema from '../views/cinema' 
// import My from '../views/my' 
// import City from '../views/city'
// import Search from '../views/search'
// import Details from '../views/details'
// import Hot from '../views/sublevel/hot'
// import Release from '../views/sublevel/release'
// import Login from '../views/login';

const loading = () => {
    return <div>loading.....</div>
}
const Film = Loadable({
    loader: () => import('../views/film'),
    loading:loading
})
const Cinema = Loadable({
    loader: () => import('../views/cinema'),
    loading:loading
})
const My = Loadable({
    loader: () => import('../views/my'),
    loading:loading
})
const City = Loadable({
    loader: () => import('../views/city'),
    loading:loading
})
const Search = Loadable({
    loader: () => import('../views/search'),
    loading:loading
})
const Details = Loadable({
    loader: () => import('../views/details'),
    loading:loading
})
const Login = Loadable({
    loader: () => import('../views/login'),
    loading:loading
})
const Hot = Loadable({
    loader: () => import('../views/sublevel/hot'),
    loading:loading
})
const Release = Loadable({
    loader: () => import('../views/sublevel/release'),
    loading:loading
})





const router = [
    {
        path:'/',
        redirect:'/film'
    },
    {
        path:'/film',
        component:Film,
        children:[
            {
                path:'/film/hot',
                component:Hot
            },
            {
                path:'/film/release',
                component:Release
            },
            {
                path:'/film',
                redirect:'/film/hot'
            }
        ]
    },
    {
        path:'/cinema',
        component:Cinema
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/details/:id',
        component:Details
    }
]

export default router