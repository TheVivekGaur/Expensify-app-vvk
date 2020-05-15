import {createStore} from 'redux';

//action generators are the functions that return action objects

const increamentCount = ({increamentBy = 1}={}) =>({
    type: 'INCREAMENT',
    increamentBy
});

const decreamentCount=({decreamentBy = 1}= {}) => ({
    type:'DECREAMENT',
    decreamentBy
});
const setCount =({count}={}) => ({
    type:'SET',
    count
});
const resetCount = () =>({
    type:'RESET',
});

//REDUCERS
//1.reducers are pure functions the output is ony determined by the input
//2. never change state or action


const countReducer = (state= {count:0} , action)=>{
    switch (action.type)
    {
        case 'INCREAMENT':
       
            return {
                count: state.count + action.increamentBy
                  };
                  case 'DECREAMENT':
                      return {
                          count: state.count - action.decreamentBy
                      };
                      case 'SET':
                          return {
                              count:action.count
                          }
                      case 'RESET':
                          return {
                              count : 0
                          }
    default: 
    return state
}
}
const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{     //this subscirbe is given to us by redux to watch for chnages in the state it will call whenever it gets changes
    console.log(store.getState());
});

//actions-allows us to chnage the data inside store and it is an object that gets sent to the store

//id like to increament the count
//dispatch allows to sent that action object to store and store can use that to do something like increase count by1

// store.dispatch({ 
//     type: 'INCREAMENT',
//     increamentBy: 5
// });
store.dispatch(increamentCount({increamentBy: 5 }))

store.dispatch(increamentCount()); 

store.dispatch(resetCount());
store.dispatch(decreamentCount());

store.dispatch(decreamentCount({decreamentBy:10}));

store.dispatch(setCount({count:101}));
//store.getState(); //returns current state object