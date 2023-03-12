import { combineReducers, configureStore } from '@reduxjs/toolkit'
import commentsSlicer from './slicers/commentsSlicer'

const rootReducer = combineReducers({
    comments: commentsSlicer
})

export const store = configureStore({
    reducer: rootReducer,
})

