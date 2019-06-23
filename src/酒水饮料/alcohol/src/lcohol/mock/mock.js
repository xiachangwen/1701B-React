import Mock from 'mockjs'

let img = [require('../../images/1_03.gif'),require('../../images/1_05.gif'),require('../../images/1_09.gif'),require('../../images/1_10.gif'),]

let list = Mock.mock({
    'list|10-20':[
        {
            'img|1':img,
            'title':'@ctitle(8,15)',
            'pic|20-100':20,
            'id|+1': 0
        }
    ]
})

Mock.mock('/api/list',{
    list
})


Mock.mock('/api/itemr',(res) =>{
    // for(let i=0; i<list.list.length; i++){
    //     if(list.list[i].id == res.body){
    //         return list.list[i]
    //     }
    // }
   let index =  list.list.findIndex(item => item.id == res.body)

   return list.list[index]
})