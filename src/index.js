import store from "./store";
import ACTION_TYPES from "./actionTypes";
import { bugAdded } from "./actions_creators";

//shows state change
const unsubcribe = store.subscribe(()=>{
    console.log('Store changed',store.getState())
})

//using an acion creator to add a bug

store.dispatch(bugAdded('adding a bug using action creators'))

store.dispatch({
    type:ACTION_TYPES.ADD_BUG,
    payload:{
        description:"code compling problems"
    }
})

store.dispatch({
    type:ACTION_TYPES.ADD_BUG,
    payload:{
        description:"just some bugs in the ui"
    }
})

store.dispatch({
    type:ACTION_TYPES.RESOLVE_BUG,
    payload:{
        id:1
    }
})

store.dispatch({
    type:ACTION_TYPES.DELETE_BUG,
    payload:{
        id:2
    }
})

console.log(store.getState())