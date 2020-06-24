import {createSlice} from '@reduxjs/toolkit'
import {ListType} from "../constants/types"

const initialState = {
    lists: [] as Array<ListType>,
    isLoading: false,
    getOnlyFavor: false,

    term: '',
    // fontSize: 14,
    // editMode: false
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
        }
    }
)

const {actions, reducer} = songsSlice

export const {

} = actions

export default reducer
