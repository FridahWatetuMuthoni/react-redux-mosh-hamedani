import ACTION_TYPES from "./actionTypes"


 export function bugAdded(description){
    return{
        type:ACTION_TYPES.ADD_BUG,
        payload:{
            description:description
        }
    }
}