import React from 'react';
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {setEditMode, setFontSize} from '../../../redux/song-reducer'
import {getSongByIdThunk, getSongByRandomThunk, setSongContentThunk, toogleFavorThunk} from '../../../redux/thunks'
import Song, {SongPropsType} from './Song'

type PathParamsType = {
    id: string
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
                    currentSongData={this.props.currentSongData}
                    toogleFavorThunk={this.props.toogleFavorThunk}
                    getSongByRandomThunk={this.props.getSongByRandomThunk}
                    fontSize={this.props.fontSize}
                    setFontSize={this.props.setFontSize}
                    editMode={this.props.editMode}
                    setEditMode={this.props.setEditMode}
                    setSongContentThunk={this.props.setSongContentThunk}
                    isLoading={this.props.isLoading}
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

// export default compose(connect<ReturnType<typeof mapStateToProps>>(mapStateToProps, {
//         getSongByIdThunk,
//         getSongByRandomThunkLocal,
//         toogleFavorThunk,
//         setSongContentThunk,
//         setFontSize,
//         setEditMode,
//     }),
//     withRouter)(SongContainer)

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps, {
        getSongByIdThunk,
        getSongByRandomThunk,
        toogleFavorThunk,
        setSongContentThunk,
        setFontSize,
        setEditMode,
    })(SongContainer)

