import { combineReducers } from "redux"

let index = 0

const listReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return[
                ...state,
                action.recipe
            ]
        case 'DEL':
            let item = state.find(r => r.id === action.recipeId)
            index = state.indexOf(item)
            return[
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        default: 
            return state
    }
}

const root_reducer = combineReducers({
    list: listReducer
})

export default root_reducer