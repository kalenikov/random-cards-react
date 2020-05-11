import {createSlice} from '@reduxjs/toolkit'
import {getSongsListThunk} from './thunks'
import {Dispatch} from "redux"

const initialState = {
    initialized: false,
    error: ''
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializedSuccess: (state) => {
            state.initialized = true
        },
        setError: (state, action)=>{
            state.error = action.payload
        }
    }
})

const {actions, reducer} = appSlice
export const {initializedSuccess, setError} = actions

export const initializeApp = () => (dispatch: any) => {
    dispatch(getSongsListThunk());
    dispatch(initializedSuccess());
}


export default reducer;
