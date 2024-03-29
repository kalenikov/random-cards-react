import { createSlice } from "@reduxjs/toolkit";
import { getSongsList } from "./thunks";

const initialState = {
    initialized: false,
    error: "",
    popper: ""
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        initializedSuccess: (state) => {
            state.initialized = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { actions, reducer } = appSlice;
export const { initializedSuccess, setError } = actions;

export const initializeApp = () => (dispatch) => {
    dispatch(getSongsList());
    dispatch(initializedSuccess());
};


export default reducer;
