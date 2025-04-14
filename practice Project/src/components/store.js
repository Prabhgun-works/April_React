import {createStore} from 'redux'; 

const initialCount = {
    count : 0,
};

function countReducer(state = initialCount , action){
    switch(action.type){
        case 'INCREMENT' :
            return {...state, count : state.count+1};
        case 'DECREMENT' :
            return {...state , count : state.count -1};
        case 'RESET' :
            return {...state ,  count : 0}
    default :
    return state;
    }}
    const store = createStore(countReducer);
    export default store; 
