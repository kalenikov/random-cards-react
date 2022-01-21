import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./app-reducer";
import reducer from "./song-reducer";


const middleware = [...getDefaultMiddleware()]

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
