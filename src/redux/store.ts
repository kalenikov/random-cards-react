import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import appReducer from './app-reducer'
import reducer from './song-reducer'
import {createLogger} from 'redux-logger'
//
const logger = createLogger({
    // collapsed: () => (true),
    // predicate: (getState, action) => !action.type.includes('@@redux-form'),
    level: 'log',
});

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore(
    {
        reducer: {
            songReducer: reducer,
            app: appReducer
        },
        middleware
    }
)


export default store
