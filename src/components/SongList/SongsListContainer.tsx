import React from 'react'
import {connect} from 'react-redux'
import {setTerm} from '../../redux/song-reducer'
import {getSongsListThunk, toogleFavorThunk, deleteSongThunk} from '../../redux/thunks'
import SongList from "./SongList";
import {createSelector} from 'reselect'

const getSongs = (state: any) => state.songReducer.songs
const getTerm = (state: any) => state.songReducer.term
const getOnlyFavor = (state: any) => state.songReducer.getOnlyFavor

const filtredSongsSelector = createSelector(
    [getSongs, getTerm, getOnlyFavor],
    (songs, term, getOnlyFavor) => {
        let filteredSongs = songs.filter((item: any) => item.name.includes(term))

        if (getOnlyFavor) {
            filteredSongs = songs.filter((item: any) => item.favor)
        }

        const cyrillic = (a: any) => 10 > a ? 2e4 + +a : a.charCodeAt(0);
        return filteredSongs.sort((a: any, b: any) => cyrillic(a.name) - cyrillic(b.name))
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
