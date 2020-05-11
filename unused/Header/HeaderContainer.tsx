import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {compose} from "redux"
import {toogleGetOnlyFavor} from "../../src/redux/song-reducer"
import {getSongByRandomThunk, getSongsListThunk} from "../../src/redux/thunks"
import HeaderOld from "./Header_old"

const mapStateToProps = (state: any) => {
    return {
        getOnlyFavor: state.songReducer.getOnlyFavor,
        songId: state.songReducer.currentSongId,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getSongsListThunk,
            toogleGetOnlyFavor,
            getSongByRandomThunk
        }),
    withRouter)(HeaderOld)

export type HeaderContainerType = {
    HeaderType: React.ElementType
}




