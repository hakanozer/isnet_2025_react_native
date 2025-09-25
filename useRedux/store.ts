import { combineReducers, legacy_createStore } from 'redux'
import { likesReducer } from './likesReducer'
import { userReducer } from './userReducer'

const reducers = combineReducers({
    likesReducer, userReducer
})

export type StateType = ReturnType<typeof reducers>
export const store = legacy_createStore(reducers)