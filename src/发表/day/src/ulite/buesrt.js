
class Eventbus {
    
    constructor(){
        this.event = {}
    }

    on(eventname, ck){
        if(this.event[eventname] instanceof Array){
            this.event[eventname].push(ck)
        }else{
            this.event[eventname] = [ck]
        }
        console.log(eventname, ck)
    }

    emit(eventname,...arg){
        console.log(eventname, arg)
        this.event[eventname] && this.event[eventname].map(item => {
            item(...arg)
        })
    }
}

export default new Eventbus()

// let bus = new Eventbus()

// bus.on('add',(arg) =>{
//     console.log(arg)
// })

// bus.emit('add','1701','9527')