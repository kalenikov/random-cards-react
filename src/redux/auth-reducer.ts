import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userInfo: {}
}

type initialStateType = typeof initialState
//
//
const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
            setUserInfo: (state: initialStateType, action) => {
                state.userInfo = action.payload
            }
        }
    }
)
//
const {actions, reducer} = authSlice
export const {setUserInfo} = actions
//
export default authSlice
