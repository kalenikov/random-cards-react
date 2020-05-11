import {createSlice} from '@reduxjs/toolkit'
import {ListType} from "../constants/types"

const initialState = {
    lists: [] as Array<ListType>,
    currentSongId: null,
    currentSongData: {
        favor: false
    },
    isLoading: false,
    getOnlyFavor: false,
    term: '',
    fontSize: 14,
    editMode: false
}
type SongType = {
    _id: string
    name: string
    favor: boolean
}
type initialStateType = typeof initialState

const songsSlice = createSlice({
        name: 'lists',
        initialState,
        reducers: {
            setSongId: (state, action) => {
                state.currentSongId = action.payload
            },
        }
    }
)

const {actions, reducer} = songsSlice

export const {
    setSongId,
} = actions

export default reducer
