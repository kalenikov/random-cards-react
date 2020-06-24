import {createSlice} from '@reduxjs/toolkit'
import { SongType } from '../constants/types'

export const initialState = {
    songs: [] as Array<SongType>,
    song: {} as SongType,
    isLoading: false,
    getOnlyFavor: false,
    showHidden: false,
    term: '',
    fontSize: 14,
    editMode: false,
}

type initialStateType = typeof initialState

const songsSlice = createSlice({
        name: 'songs',
        initialState,
        reducers: {
            setSong: (state, action) => {
                state.song = action.payload
            },
            toogleGetOnlyFavor: (state) => {
                state.getOnlyFavor = !state.getOnlyFavor
            },
            toogleShowHidden: (state) => {
                state.showHidden = !state.showHidden
            },
            setSongsList: (state, action) => {
                state.songs = action.payload
            },
            setTerm: (state, action) => {
                state.term = action.payload
            },
            setFontSize: (state, action) => {
                state.fontSize = action.payload
            },
            setEditMode: (state, action) => {
                state.editMode = action.payload
            },
            setLoadingOn: (state) => {
                state.isLoading = true
            },
            setLoadingOff: (state) => {
                state.isLoading = false
            },
            toogleHide: (state, action) => {
                if (state.song) {
                    state.song.hide = !state.song.hide
                }
                state.songs.map((song: SongType) => {
                    if (song._id === action.payload) {
                        song.hide = !song.hide
                    }
                    return song
                })
            },
            toogleFavor: (state, action) => {
                if (state.song) {
                    state.song.favor = !state.song.favor
                }
                state.songs.map((song: SongType) => {
                    if (song._id === action.payload) {
                        song.favor = !song.favor
                    }
                    return song
                })
            },
        }
    }
)

const {actions, reducer} = songsSlice

export const {
    setSong,
    toogleGetOnlyFavor,
    setSongsList,
    setTerm,
    toogleFavor,
    setLoadingOff,
    setLoadingOn,
    setEditMode,
    setFontSize,
    toogleHide,
    toogleShowHidden
} = actions

export default reducer
