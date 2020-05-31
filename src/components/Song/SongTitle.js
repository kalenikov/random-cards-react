import {Container, IconButton, Typography} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import {makeStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {bindTrigger} from 'material-ui-popup-state'
import {bindPopper, bindToggle, usePopupState, anchorRef} from 'material-ui-popup-state/hooks'
import React, {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router'
import history from '../../common/history'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const useStyles = makeStyles(theme => ({
    paper: {
        border: '1px solid',
        top: '20px',
        left: '20px',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper
    },
    typography: {
        padding: theme.spacing(1),
        opacity: 0.5
    }
}))

const SongTitle = (props) => {

    const {id} = useParams()

    const styles = useStyles()
    const popupState = usePopupState({variant: 'popper', popupId: 'favorPopper'})
    const favorIconRef = useRef()
    const prevFavor = usePrevious(props.currentSongData.favor)
    const prevId = usePrevious(id)


    popupState.setAnchorEl(favorIconRef.current)

    useEffect(() => {

        console.log('prevId', prevId, 'id', id)

        // (this.props.match.params.userId != prevProps.match.params.userId)
        // if (prevFavor !== undefined) {
        if ((id === prevId) && (prevFavor !== undefined)) {
            popupState.open()
            setTimeout(() => {
                popupState.close()
            }, 2000)
        }

    }, [props.currentSongData.favor])


    const deleteSongHandler = () => {
        const isDelete = window.confirm('Delete this song?')
        if (isDelete) {
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

        <Popper anchorEl={favorIconRef} {...bindPopper(popupState)}>
            <Paper>
                <Typography className={styles.typography}>
                    {props.currentSongData.favor
                        ? 'Song add to favor'
                        : 'Song deleted from favor'}
                </Typography>
            </Paper>
        </Popper>

        <IconButton
            ref={favorIconRef}
            onClick={() => props.toogleFavorThunk(props.currentSongData._id, props.currentSongData.favor)}>
            {props.currentSongData.favor
                ? <FavoriteIcon/>
                : <FavoriteBorderIcon/>}

        </IconButton>

        <IconButton onClick={deleteSongHandler}>
            <DeleteIcon/>
        </IconButton>

        <IconButton
            onClick={() => props.toogleHideThunk(props.currentSongData._id, props.currentSongData.hide)}>
            {props.currentSongData.hide
                ? <VisibilityOffIcon />
                : <VisibilityIcon />}
        </IconButton>

    </Container>
}

export default SongTitle
