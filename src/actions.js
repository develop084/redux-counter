// increment action  

const increment = () =>{
return {
 type: "INCREMENT", 
 payload: {count: 1} 
}
}

// decrement action
const decrement = () =>{
    return {
        type: 'DECREMENT',
        payload: { count: 1 }
    }
}


module.exports = {increment, decrement};