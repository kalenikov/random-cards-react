import React from "react";
import { connect } from "react-redux";
import { setTerm } from "../../redux/song-reducer.js";
import { getSongsList, toogleFavorForSong, deleteSongThunk } from "../../redux/thunks.js";
import SongList from "./SongList";
import { createSelector } from "reselect";

const getSongs = (state) => state.songReducer.songs;
const getTerm = (state) => state.songReducer.term;
const getOnlyFavor = (state) => state.songReducer.getOnlyFavor;
const showHidden = (state) => state.songReducer.showHidden;

const filteredSongsSelector = createSelector([getSongs, getTerm, getOnlyFavor], (songs, term, getOnlyFavor) => {

        // let filteredSongs = songs.filter((item: any) => item.name.includes(term))
        let filteredSongs = songs.filter((item) => !item.hide);

        if (getOnlyFavor) {
            filteredSongs = songs.filter((item) => item.favor);
        }

        if (!showHidden) {
            filteredSongs = songs.filter((item) => !item.hide);
        }

        const cyrillic = (a) => 10 > a ? 2e4 + +a : a.charCodeAt(0);
        // filteredSongs = filteredSongs.sort((a: any, b: any) => cyrillic(a.name1) - cyrillic(b.name));

        // filteredSongs = filteredSongs.sort((a: any, b: any) => b.time_last_seen - a.time_last_seen);
        // filteredSongs = filteredSongs.map((item: SongType, index: number) => ({...item, index}))

        // const randomSongs = filteredSongs.sort((a: SongType, b: SongType) => 0.5 - Math.random());
        return filteredSongs;
    }
);

const mapStateToProps = (state) => {
    return {
        songs: filteredSongsSelector(state),
        term: getTerm(state),
        isLoading: state.songReducer.isLoading,
        getOnlyFavor: state.songReducer.getOnlyFavor,
        lastSongIndex: state.songReducer.lastSongIndex
    };
};

export default connect(mapStateToProps, {
    getSongsListThunk: getSongsList,
    setTerm,
    toogleFavorThunk: toogleFavorForSong,
    deleteSongThunk
})(SongList);
