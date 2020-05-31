import React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router-dom'
import {setEditMode, setFontSize, setLastSongIndex} from '../../redux/song-reducer'
import {
    deleteSongThunk,
    getSongByIdThunk,
    getSongByRandomThunk,
    setSongContentThunk,
    toogleFavorThunk,
    toogleHideThunk
} from '../../redux/thunks'
import Song, {SongPropsType} from './Song'

type PathParamsType = {
    id: string
    index: string
}

type OwnPropsTypes = {
    getSongByIdThunk: (id: string, index: string) => void
}

type SongContainerPropsType = RouteComponentProps<PathParamsType> & SongPropsType & OwnPropsTypes

class SongContainer extends React.Component<SongContainerPropsType> {

    componentDidUpdate(prevProps: SongContainerPropsType) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getSongByIdThunk(this.props.match.params.id, this.props.match.params.index)
        }
    }

    componentDidMount() {
        this.props.getSongByIdThunk(this.props.match.params.id, this.props.match.params.index)
    }

    render() {
        return (
            <div>
                <Song
                    history={this.props.history}
                    currentSongData={this.props.currentSongData}
                    toogleFavorThunk={this.props.toogleFavorThunk}
                    toogleHideThunk={this.props.toogleHideThunk}
                    getSongByRandomThunk={this.props.getSongByRandomThunk}
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
        currentSongData: state.songReducer.currentSongData,
        isLoading: state.songReducer.isLoading,
        fontSize: state.songReducer.fontSize,
        editMode: state.songReducer.editMode
    }
}

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps, {
    getSongByIdThunk,
    getSongByRandomThunk,
    toogleFavorThunk,
    setEditMode,
    toogleHideThunk,
    setSongContentThunk,
    setFontSize,
    setLastSongIndex,
    deleteSongThunk
})(SongContainer)

