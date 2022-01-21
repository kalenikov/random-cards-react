import React from "react";
import { connect } from "react-redux";
import { setEditMode, setFontSize } from "../../redux/song-reducer";
import {
  deleteSongThunk,
  getNextSongId,
  getRandomSongId,
  getSongById,
  postSongContentOnServer,
  toogleFavorForSong,
  toogleHideThunk
} from "../../redux/thunks";
import Song from "./Song";


class SongContainer extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getSongByIdThunk(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.props.getSongByIdThunk(this.props.match.params.id);
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
          getNextSongIdThunk={this.props.getNextSongIdThunk}
          fontSize={this.props.fontSize}
          setFontSize={this.props.setFontSize}
          editMode={this.props.editMode}
          setEditMode={this.props.setEditMode}
          setSongContentThunk={this.props.setSongContentThunk}
          isLoading={this.props.isLoading}
          deleteSongThunk={this.props.deleteSongThunk}
        />
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    song: state.songReducer.song,
    isLoading: state.songReducer.isLoading,
    fontSize: state.songReducer.fontSize,
    editMode: state.songReducer.editMode
  };
};

export default connect(mapStateToProps, {
  getSongByIdThunk: getSongById,
  getRandomSongIdThunk: getRandomSongId,
  getNextSongIdThunk: getNextSongId,
  toogleFavorThunk: toogleFavorForSong,
  setEditMode,
  toogleHideThunk,
  setSongContentThunk: postSongContentOnServer,
  setFontSize,
  deleteSongThunk
})(SongContainer);

