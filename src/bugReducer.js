import ACTION_TYPES from "./actionTypes"

let lastId = 0

export default function bugReducer(state=[],action) {
    switch(action.type){
        case ACTION_TYPES.ADD_BUG :
            return[
                ...state,
                {
                    id:++lastId,
                    description:action.payload.description,
                    resolved:false
                }
            ]
        case ACTION_TYPES.RESOLVE_BUG :
            return state.map((bug)=> bug.id === action.payload.id ? {...bug,resolved:true}: bug)
        case ACTION_TYPES.DELETE_BUG:
            return state.filter(bug => bug.id !== action.payload.id)

        default:
            return state
    }
}

