import { SongAPI } from "../api/api";
import {
    setLoadingOff,
    setLoadingOn,
    setSong,
    setSongsList,
    toogleFavor,
    toogleGetOnlyFavor,
    toogleHide
} from "./song-reducer";
import { setError } from "./app-reducer.js";

export const getSongsList = () => async (dispatch, getState) => {
    dispatch(setLoadingOn());
    const getOnlyFavor = getState().songReducer.getOnlyFavor;
    try {
        const response = await SongAPI.getSongsList(getOnlyFavor);
        dispatch(setSongsList(response.data));
    } catch (e) {
        console.error(e);
        dispatch(setError(e.toString()));
    }
    dispatch(setLoadingOff());
};

export const getSongByIdAs = (songId) => async (dispatch) => {
    debugger
    dispatch(setLoadingOn());
    const response = await SongAPI.getSong(songId);
    dispatch(setLoadingOff());
    dispatch(setSong(response[0]));
    if (response.data.length === 1) {
        dispatch(setLoadingOff());
        dispatch(setSong(response.data[0]));
    }
};

export const getSongById = (songId) => (dispatch, getState) => {
    const state = getState().songReducer;
    debugger
    dispatch(setLoadingOn());
    const response = state.songs.filter(item => item.id === parseInt(songId));
    dispatch(setLoadingOff());
    dispatch(setSong(response[0]));
};

export const getRandomSongId = (history) => (dispatch, getState) => {
    const state = getState().songReducer;
    let songs = state.songs;
    const currentSongId = songs.filter((item) => !item.hide);
    if (state.getOnlyFavor) {
        songs = state.songs.filter((item) => item.favor);
    }
    if (!state.showHidden) {
        songs = songs.filter((item) => !item.hide);
    }
    let song = songs[Math.floor(Math.random() * songs.length)];
    dispatch(setSong({ ...song }));
    history.push("/card/" + song.id);
};

export const getNextSongId = (history) => (dispatch, getState) => {
    const state = getState().songReducer;
    const nextIndex = state.index + 1;
    let song = state.songs[nextIndex];
    dispatch(setSong({ ...song }));
    history.push("/card/" + song.id);
};

export const toogleFavorForSong = (songId, favor) => async (
    dispatch
) => {
    await SongAPI.setFavor(songId, !favor);
    dispatch(toogleFavor(songId));
};

export const postSongContentOnServer = (
    songId,
    content
) => async (dispatch, getState) => {
    dispatch(setLoadingOn());
    const response = await SongAPI.setContent(songId, content);
    if (response.status === 202) {
        dispatch(setLoadingOff());
        dispatch(setSong({ ...getState().songReducer.song, content: content }));
    }
};

export const toogleGetOnlyFavorUpdateList = (
    songId,
    favor
) => (dispatch, getState) => {
    dispatch(toogleGetOnlyFavor());
    if (getState().songReducer.getOnlyFavor) {
        dispatch(
            setSongsList(
                getState().songReducer.songs.filter(
                    (song) => song.favor
                )
            )
        );
    }
};

export const toogleHideThunk = (songId, hide) => async (
    dispatch,
    getState
) => {
    await SongAPI.setHide(songId, !hide);
    dispatch(toogleHide(songId));
    dispatch(
        setSongsList(
            getState().songReducer.songs.filter(
                (song) => song.id != songId
            )
        )
    );
};

export const addSongThunk = (
    history,
    name,
    content,
    favor
) => async (dispatch) => {
    dispatch(setLoadingOn());
    const responce = await SongAPI.addSong(name, content, favor);
    history.push("/card/" + responce.data);
    dispatch(setLoadingOff());
};

export const deleteSongThunk = (songId, history) => async (
    dispatch,
    getState
) => {
    dispatch(setLoadingOn());
    const response = await SongAPI.deleteSong(songId);
    const songs = getState().songReducer.songs;
    dispatch(setSongsList(songs.filter((song) => song.id != songId)));
    dispatch(setLoadingOff());
    history.push("/cards");
};
