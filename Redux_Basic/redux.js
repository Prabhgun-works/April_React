import { createStore } from 'redux';

const intialState ={
    count : 0,
};
function countReducer(state = intialState , action ){
    switch (action.type){
        case 'INCREMENT' :
            return {...state , count : state.count +1 };
        case 'DECREMENT' :
            return {...state , count : state.count - 1 };
        case 'RESET':
            return {...state , count :  0};
            default :
            return state ; 
        
    }
}
const store = createStore(countReducer);

store.subscribe(() => {
    console.log("Current State : " , store.getState());
});

    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type : 'INCREMENT'});
    store.dispatch({type : 'DECREMENT'});
    store.dispatch({type : 'RESET'});
