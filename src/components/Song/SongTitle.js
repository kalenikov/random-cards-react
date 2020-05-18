import {Container, IconButton, Typography} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import history from '../../common/history'

export const SongTitle = (props) => {

    const deleteSongHandler = () =>{
        const isDelete = window.confirm('Delete this song?')
        if (isDelete){
            props.deleteSongThunk(props.currentSongData._id, history)
        }
    }

    return <Container>
        <Typography variant={'h6'} noWrap>
            {props.currentSongData.name + (props.editMode ? ' (редактирование)' : '')}
        </Typography>
        <Typography variant={'caption'}>
            {`last seen: ${new Date(props.currentSongData.time_last_seen).toLocaleDateString()}`}
        </Typography>

        <IconButton
            onClick={() => props.toogleFavorThunk(props.currentSongData._id, props.currentSongData.favor)}>

            {props.currentSongData.favor
                ? <FavoriteIcon/>
                : <FavoriteBorderIcon/>}

        </IconButton>

        <IconButton onClick={deleteSongHandler}>
            <DeleteIcon />
        </IconButton>

        <IconButton
            onClick={() => props.toogleHideThunk(props.currentSongData._id, props.currentSongData.hide)}>
            <HighlightOffIcon />
        </IconButton>

    </Container>
}
