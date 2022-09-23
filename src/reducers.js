
const initialState ={
count : 1, 
title : 'count'
}

const counterReducer = (state = initialState, action)=>{

    switch(action.type){

        case "INCREMENT": 
            return {
            ...state,
            count: state.count + action.payload.count,
        };


        case "DECREMENT":
            return {
            ...state,
            count: state.count - action.payload.count,
        };

        default: 
        return state;
  }
}

export default counterReducer;