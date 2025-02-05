export const fadeIn =(direction:string, delay:number)=>{
    return {
        hidden:{
            y:direction==='up'?40:direction==='down'?-40:0,
            x:direction==='left'?40:direction==='right'?-40:0,
            opacity:0,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75,]
            }
        }
    }

}


export const hover=( delay:number)=>{
    return {
        pointer:{
            cursor:'pointer',
        },
        hidden:{
            backgroundColor:'transparent',
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }, 
        show:{
            cursor:'pointer',
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }

}
