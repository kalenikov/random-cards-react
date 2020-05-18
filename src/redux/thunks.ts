import {SongAPI} from '../api/api'
import {setLoadingOff, setLoadingOn, setSongData, setSongId, setSongsList, toogleFavor, toogleGetOnlyFavor, toogleHide, setLastSongIndex} from './song-reducer'
import {setError} from './app-reducer'
import {SongType} from "../constants/types"

export const getSongsListThunk = () => async (dispatch: any, getState: any) => {
    dispatch(setLoadingOn())
    const getOnlyFavor = getState().songReducer.getOnlyFavor
    try {
        const response = await SongAPI.getSongsList(getOnlyFavor)
        dispatch(setSongsList(response.data))
    } catch (e) {
        console.error(e)
        dispatch(setError(e.toString()))
    }

    dispatch(setLoadingOff())

}

export const getSongByIdThunk = (songId: number, index: number) => async (dispatch: any) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.getSong(songId)
    if (response.data.length === 1) {
        dispatch(setLoadingOff())
        dispatch(setSongData(response.data[0]))
        dispatch(setLastSongIndex(index))
    }
}

export const getSongByRandomThunk = (history: any) => (dispatch: any, getState: any) => {
    const state = getState().songReducer
    let songs = state.songs
    if (state.getOnlyFavor) {
        songs = state.songs.filter((item: SongType) => item.favor)
    }
    const song = songs[Math.floor(Math.random() * songs.length)];
    dispatch(setSongId(song._id))
    history.push('/card/' + song._id)
}

export const toogleFavorThunk = (songId: number, favor: boolean) => async (dispatch: any) => {
    await SongAPI.setFavor(songId, !favor)
    dispatch(toogleFavor(songId))
}

export const setSongContentThunk = (songId: number, content: string) => async (dispatch: any, getState: any) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.setContent(songId, content)
    if (response.status === 202) {
        dispatch(setLoadingOff())
        dispatch(setSongData({...getState().songReducer.currentSongData, content: content}))
    }
}
export const toogleGetOnlyFavorUpdateList = (songId: number, favor: boolean) => (dispatch: any, getState: any) => {
    dispatch(toogleGetOnlyFavor())
    if (getState().songReducer.getOnlyFavor){
        dispatch(setSongsList(getState().songReducer.songs.filter((song: SongType) => song.favor)))
    }
}

export const toogleHideThunk = (songId: number, hide: boolean) => async (dispatch: any) => {
    await SongAPI.setHide(songId, !hide)
    dispatch(toogleHide(songId))
}

export const addSongThunk = (history: any, name: string, content: string, favor: boolean) => async (dispatch: any) => {
    dispatch(setLoadingOn())
    const responce = await SongAPI.addSong(name, content, favor)
    history.push('/card/' + responce.data)
    dispatch(setLoadingOff())
}

export const deleteSongThunk = (songId: number, history: any) => async (dispatch: any, getState: any) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.deleteSong(songId)
    const songs = getState().songReducer.songs
    dispatch(setSongsList(songs.filter((song: any) => song._id != songId)))
    dispatch(setLoadingOff())
    history.push('/cards')
}

