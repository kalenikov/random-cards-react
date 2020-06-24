import React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import {setEditMode, setFontSize} from '../../redux/song-reducer'
import {
    deleteSongThunk,
    getSongById,
    getRandomSongId,
    postSongContentOnServer,
    toogleFavorForSong,
    toogleHideThunk
} from '../../redux/thunks'
import Song, {SongPropsType} from './Song'

type PathParamsType = {
    id: string
    index: string
}

type OwnPropsTypes = {
    getSongByIdThunk: (id: string) => void
}

type SongContainerPropsType = RouteComponentProps<PathParamsType> & SongPropsType & OwnPropsTypes

class SongContainer extends React.Component<SongContainerPropsType> {

    componentDidUpdate(prevProps: SongContainerPropsType) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getSongByIdThunk(this.props.match.params.id)
        }
    }

    componentDidMount() {
        this.props.getSongByIdThunk(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <Song
                    history={this.props.history}
                    song={this.props.song}
                    toogleFavorThunk={this.props.toogleFavorThunk}
                    toogleHideThunk={this.props.toogleHideThunk}
                    getRandomSongIdThunk={this.props.getRandomSongIdThunk}
                    fontSize={this.props.fontSize}
                    setFontSize={this.props.setFontSize}
                    editMode={this.props.editMode}
                    setEditMode={this.props.setEditMode}
                    setSongContentThunk={this.props.setSongContentThunk}
                    isLoading={this.props.isLoading}
                    deleteSongThunk={this.props.deleteSongThunk}
                />
            </div>)
    }
}

const mapStateToProps = (state: any) => {
    return {
        song: state.songReducer.song,
        isLoading: state.songReducer.isLoading,
        fontSize: state.songReducer.fontSize,
        editMode: state.songReducer.editMode
    }
}

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps, {
    getSongByIdThunk: getSongById,
    getRandomSongIdThunk: getRandomSongId,
    toogleFavorThunk: toogleFavorForSong,
    setEditMode,
    toogleHideThunk,
    setSongContentThunk: postSongContentOnServer,
    setFontSize,
    deleteSongThunk
})(SongContainer)

