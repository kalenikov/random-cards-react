import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    songs: [],
    songsViews: [],
    index: -1, // храним тут, чтобы не мутировать SongType и не синхрозировать объект Song при каждом обновлении
    song: {},
    isLoading: false,
    getOnlyFavor: false,
    showHidden: false,
    term: "",
    fontSize: 14,
    editMode: false
};


const songsSlice = createSlice({
        name: "songs",
        initialState,

        reducers: {
            setSong: (state, action) => {
                state.song = action.payload;
                const songId = state.song.id;
                const currentSongInSongs = state.songs.filter(item => {
                    return item.id === songId;
                });
                state.index = currentSongInSongs[0].index;
            },

            setIndex: (state, action) => {
                state.index = action.payload;
            },

            toogleGetOnlyFavor: (state) => {
                state.getOnlyFavor = !state.getOnlyFavor;
            },

            toogleShowHidden: (state) => {
                state.showHidden = !state.showHidden;
            },

            setSongsList: (state, action) => {
                let songs = action.payload;
                let sorted = songs.sort((a, b) => b.time_last_seen - a.time_last_seen);
                state.songs = songs.map((item, index) => ({ ...item, index }));
                console.log("setSongsList " + state.songs);
            },

            setTerm: (state, action) => {
                state.term = action.payload;
            },

            setFontSize: (state, action) => {
                state.fontSize = action.payload;
            },

            setEditMode: (state, action) => {
                state.editMode = action.payload;
            },

            setLoadingOn: (state) => {
                state.isLoading = true;
            },

            setLoadingOff: (state) => {
                state.isLoading = false;
            },

            toogleHide: (state, action) => {
                if (state.song) {
                    state.song.hide = !state.song.hide;
                }
                state.songs.map((song) => {
                    if (song.id === action.payload) {
                        song.hide = !song.hide;
                    }
                    return song;
                });
            },

            toogleFavor: (state, action) => {
                if (state.song) {
                    state.song.favor = !state.song.favor;
                }
                state.songs.map((song) => {
                    if (song.id === action.payload) {
                        song.favor = !song.favor;
                    }
                    return song;
                });
            }
        }
    }
);

const { actions, reducer } = songsSlice;

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
    setIndex,
    toogleHide,
    toogleShowHidden
} = actions;

export default reducer;
