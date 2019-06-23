import Loadable from 'react-loadable'
import React from 'react'

//首页
// import Home from '../views/homes/home'
// import Bketch from '../views/homes/bketch'
// import Bpoints from '../views/homes/bpoints'
// import Briefly from '../views/homes/briefly'
// import Sarration from '../views/homes/sarration'
// import Summary from '../views/homes/summary'
// import Survey from '../views/homes/survey'

// import Customer from '../views/customers/customer' //客户管理
// import Staff from '../views/staffs/staff' //员工管理
// import Work from '../views/works/work' // 工作计划

const Loading = () => {
    return <div>loading</div>
}

const Home = Loadable({
    loader: () => import('../views/homes/home'),
    loading: Loading
})
const Briefly = Loadable({
    loader: () => import('../views/homes/briefly'),
    loading: Loading
})
const Survey = Loadable({
    loader: () => import('../views/homes/survey'),
    loading: Loading
})
const Bketch = Loadable({
    loader: () => import('../views/homes/bketch'),
    loading: Loading
})
const Bpoints = Loadable({
    loader: () => import('../views/homes/bpoints'),
    loading: Loading
})
const Sarration = Loadable({
    loader: () => import('../views/homes/sarration'),
    loading: Loading
})
const Summary = Loadable({
    loader: () => import('../views/homes/summary'),
    loading: Loading
})

const Customer = Loadable({
    loader: () => import('../views/customers/customer'),
    loading: Loading
})
const Staff = Loadable({
    loader: () => import('../views/staffs/staff'),
    loading: Loading
})
const Work = Loadable({
    loader: () => import('../views/works/work'),
    loading: Loading
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
                path:'/home/briefly',
                component:Briefly,
                children:[
                    {
                        path:'/home/briefly/bketch',
                        component:Bketch
                    }, {
                        path:'/home/briefly/bpoints',
                        component:Bpoints
                    }, {
                        path:'/home/briefly',
                        redirect:'/home/briefly/bketch'
                    }
                ]
            }, {
                path:'/home/survey',
                component:Survey,
                children:[
                    {
                        path:'/home/survey/sarration',
                        component:Sarration
                    }, {
                        path:'/home/survey/summary',
                        component:Summary
                    }, {
                        path:'/home/survey',
                        redirect:'/home/survey/sarration'
                    }
                ]
            }, {
                path:'/home',
                redirect:'/home/briefly'
            }
        ]
    },{
        path:'/customer',
        component:Customer
    },{
        path:'/staff',
        component:Staff
    },{
        path:'/work',
        component:Work
    }
]

export default routes