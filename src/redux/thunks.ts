import { SongAPI } from '../api/api'
import {
    setLoadingOff,
    setLoadingOn,
    setSong,
    setSongsList,
    toogleFavor,
    toogleGetOnlyFavor,
    toogleHide,
} from './song-reducer'
import { setError } from './app-reducer'
import { SongType } from '../constants/types'

export const getSongsList = () => async (dispatch: any, getState: any) => {
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

export const getSongById = (songId: number) => async (dispatch: any) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.getSong(songId)
    if (response.data.length === 1) {
        dispatch(setLoadingOff())
        dispatch(setSong(response.data[0]))
    }
}

export const getRandomSongId = (history: any) => (
    dispatch: any,
    getState: any
) => {
    const state = getState().songReducer
    let songs = state.songs

    if (state.getOnlyFavor) {
        songs = state.songs.filter((item: SongType) => item.favor)
    }
    if (!state.showHidden) {
        songs = songs.filter((item: SongType) => !item.hide)
    }

    let song = songs[Math.floor(Math.random() * songs.length)]

    // const ids = [
    //     {name: 'song1', _id: '5e8c7e478a70c33100ead585', favor: false},
    //     {name: 'song2', _id: '5e8c7e478a70c33100ead57b', favor: true}
    // ]
    // song = ids[Math.floor(Math.random() * ids.length)];

    dispatch(setSong({ ...song }))
    history.push('/card/' + song._id)
}

export const toogleFavorForSong = (songId: number, favor: boolean) => async (
    dispatch: any
) => {
    await SongAPI.setFavor(songId, !favor)
    dispatch(toogleFavor(songId))
}

export const postSongContentOnServer = (
    songId: number,
    content: string
) => async (dispatch: any, getState: any) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.setContent(songId, content)
    if (response.status === 202) {
        dispatch(setLoadingOff())
        dispatch(setSong({ ...getState().songReducer.song, content: content }))
    }
}
export const toogleGetOnlyFavorUpdateList = (
    songId: number,
    favor: boolean
) => (dispatch: any, getState: any) => {
    dispatch(toogleGetOnlyFavor())
    if (getState().songReducer.getOnlyFavor) {
        dispatch(
            setSongsList(
                getState().songReducer.songs.filter(
                    (song: SongType) => song.favor
                )
            )
        )
    }
}

export const toogleHideThunk = (songId: string, hide: boolean) => async (
    dispatch: any,
    getState: any
) => {
    await SongAPI.setHide(songId, !hide)
    dispatch(toogleHide(songId))
    dispatch(
        setSongsList(
            getState().songReducer.songs.filter(
                (song: SongType) => song._id != songId
            )
        )
    )
}

export const addSongThunk = (
    history: any,
    name: string,
    content: string,
    favor: boolean
) => async (dispatch: any) => {
    dispatch(setLoadingOn())
    const responce = await SongAPI.addSong(name, content, favor)
    history.push('/card/' + responce.data)
    dispatch(setLoadingOff())
}

export const deleteSongThunk = (songId: number, history: any) => async (
    dispatch: any,
    getState: any
) => {
    dispatch(setLoadingOn())
    const response = await SongAPI.deleteSong(songId)
    const songs = getState().songReducer.songs
    dispatch(setSongsList(songs.filter((song: any) => song._id != songId)))
    dispatch(setLoadingOff())
    history.push('/cards')
}
