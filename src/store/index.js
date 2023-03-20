import { combineReducers, configureStore } from '@reduxjs/toolkit'
import commentsSlicer from './slicers/commentsSlicer'

const saveStateToLocalStorage = (state) => {
    try {
        const stateString = JSON.stringify(state)
		localStorage.setItem('persistantState', stateString)

    } catch (error) {
        console.warn(error)
    }
}


const loadStateFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem("persistantState");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

const rootReducer = combineReducers({
    comments: commentsSlicer
})

const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadStateFromLocalStorage()
})

store.subscribe(() => saveStateToLocalStorage(store.getState()))

export default store;
