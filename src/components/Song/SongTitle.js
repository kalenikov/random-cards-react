import {Container, IconButton, Typography} from '@material-ui/core'
import Popover from '@material-ui/core/Popover'
import Popper from '@material-ui/core/Popper'
import {makeStyles} from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import {Alert} from '@material-ui/lab'
import React, {useContext, useEffect, useRef, useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import history from '../../common/history'
import BlockIcon from '@material-ui/icons/Block';
import {PopperContext} from '../Context/PopperContext'

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
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper
    }
}))

export const SongTitle = (props) => {

    // https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/

    const [anchorEl, setAnchorEl] = useState(null)
    const favorIconRef = useRef()
    const prevFavor = usePrevious(props.currentSongData.favor)
    const styles = useStyles()

    useEffect(() => {
        if (prevFavor !== undefined) {
            console.log('now', props.currentSongData.favor, 'prev', prevFavor)
            setAnchorEl(favorIconRef.current)
            setTimeout(() => {
                setAnchorEl(null)
            }, 2000)
        }

    }, [props.currentSongData.favor])


    const deleteSongHandler = () => {
        const isDelete = window.confirm('Delete this song?')
        if (isDelete) {
            props.deleteSongThunk(props.currentSongData._id, history)
        }
    }

    const favorClickHandle = () => {
        props.toogleFavorThunk(props.currentSongData._id, props.currentSongData.favor)
    }

    return <Container>
        <Typography variant={'h6'} noWrap>
            {props.currentSongData.name + (props.editMode ? ' (редактирование)' : '')}
        </Typography>
        <Typography variant={'caption'}>
            {`last seen: ${new Date(props.currentSongData.time_last_seen).toLocaleDateString()}`}
        </Typography>

        <IconButton
            ref={favorIconRef}
            onClick={favorClickHandle}>
            {props.currentSongData.favor
                ? <FavoriteIcon/>
                : <FavoriteBorderIcon/>}

        </IconButton>

        <Popper
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
        >
            <div className={styles.paper}>
                {props.currentSongData.favor
                    ? 'Song add to favor'
                    : 'Song deleted from favor'}
            </div>
        </Popper>


        <IconButton onClick={deleteSongHandler}>
            <DeleteIcon/>
        </IconButton>


        <IconButton
            onClick={() => props.toogleHideThunk(props.currentSongData._id, props.currentSongData.hide)}>
            <BlockIcon/>
        </IconButton>

    </Container>
}
