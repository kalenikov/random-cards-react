import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    songs: [] as Array<SongType>,
    currentSongId: null,
    lastSongIndex: 0,
    currentSongData: {} as SongType,
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
    hide: boolean
}
type initialStateType = typeof initialState

const songsSlice = createSlice({
        name: 'songs',
        initialState,
        reducers: {
            setSongId: (state, action) => {
                state.currentSongId = action.payload
            },
            setLastSongIndex: (state, action) => {
                state.lastSongIndex = action.payload
            },
            setSongData: (state, action) => {
                state.currentSongData = action.payload
            },
            toogleGetOnlyFavor: (state) => {
                state.getOnlyFavor = !state.getOnlyFavor
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
                if (state.currentSongData) {
                    state.currentSongData.hide = !state.currentSongData.hide
                }
            },
            toogleFavor: (state, action) => {
                if (state.currentSongData) {
                    state.currentSongData.favor = !state.currentSongData.favor
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
    setSongId,
    setSongData,
    toogleGetOnlyFavor,
    setSongsList,
    setTerm,
    toogleFavor,
    setLoadingOff,
    setLoadingOn,
    setEditMode,
    setFontSize,
    toogleHide,
    setLastSongIndex
} = actions

export default reducer
