import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from './reduxReducer'


const rootReducer = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer,
})
