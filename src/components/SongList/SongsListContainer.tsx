import React from 'react'
import {connect} from 'react-redux'
import {setTerm} from '../../redux/song-reducer'
import {getSongsListThunk, toogleFavorThunk, deleteSongThunk} from '../../redux/thunks'
import SongList from "./SongList";
import {createSelector} from 'reselect'
import {SongType} from "../../constants/types"

const getSongs = (state: any) => state.songReducer.songs
const getTerm = (state: any) => state.songReducer.term
const getOnlyFavor = (state: any) => state.songReducer.getOnlyFavor
const showHidden = (state: any) => state.songReducer.showHidden

const filtredSongsSelector = createSelector(
    [getSongs, getTerm, getOnlyFavor],
    (songs, term, getOnlyFavor) => {
        // let filteredSongs = songs.filter((item: any) => item.name.includes(term))
        let filteredSongs = songs.filter((item: SongType) => !item.hide)

        if (getOnlyFavor) {
            filteredSongs = songs.filter((item: any) => item.favor)
        }

        if (!showHidden) {
            filteredSongs = songs.filter((item: SongType) => !item.hide)
        }

        const cyrillic = (a: any) => 10 > a ? 2e4 + +a : a.charCodeAt(0);
        filteredSongs = filteredSongs.sort((a: any, b: any) => cyrillic(a.name) - cyrillic(b.name))
        return filteredSongs.sort((a: SongType, b: SongType) => 0.5 - Math.random())
    }
)

const mapStateToProps = (state: any) => {
    return {
        songs: filtredSongsSelector(state),
        term: getTerm(state),
        isLoading: state.songReducer.isLoading,
        getOnlyFavor: state.songReducer.getOnlyFavor,
        lastSongIndex: state.songReducer.lastSongIndex
    }
}

export default connect(mapStateToProps, {getSongsListThunk, setTerm, toogleFavorThunk, deleteSongThunk})(SongList)
