import React from 'react'
import ContentEditable from "react-contenteditable";
import {br2nl, nl2br} from '../../common/nl2br'
import s from './Song.module.css'
import Spinner from '../Spinner/Spinner';
import LoopIcon from '@material-ui/icons/Loop';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Container, Paper, Grid, Typography, Fab, Box, IconButton, ButtonGroup} from "@material-ui/core"
import AlarmIcon from '@material-ui/icons/Alarm';
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"


export type SongPropsType = {
    getSongByRandomThunk: (history: any) => void
    history: any
    currentSongData: any
    isLoading: boolean
    fontSize: number
    editMode: boolean
    setFontSize: (size: number) => void
    toogleFavorThunk: (id: number, favor: boolean) => void
    setEditMode: (editMode: boolean) => void
    setSongContentThunk: (id: number, sanitizedHtml: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap'

        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(5),
            right: theme.spacing(5),
        },
        floatButtonBlock: {
            color: 'black',
            position: 'absolute',
            right: '10px',
            top: '100px',
            zIndex: 100,
            '& Button': {
                display: 'block'
            }
        },

    }),
);


const Song: React.FunctionComponent<SongPropsType> = (props: SongPropsType) => {

    const classes = useStyles();
    const contentEditable: React.RefObject<HTMLInputElement> = React.createRef();

    if (props.isLoading || !props.currentSongData) {
        return <Spinner/>
    }

    const songContent = nl2br(props.currentSongData.content)

    const shuffle = (e: any) => {
        e.preventDefault()
        if (props.editMode) {
            props.setEditMode(false)
        }
        props.getSongByRandomThunk(props.history)
    }

    const changefontSize = (e: any, inc: number) => {
        props.setFontSize(props.fontSize + inc)
    }

    const toogleEditMode = () => {
        props.setEditMode(!props.editMode)
        if (props.editMode && contentEditable.current) {
            props.setSongContentThunk(props.currentSongData._id, br2nl(contentEditable.current.innerText))
            props.setEditMode(false)
        }
    }

    const FloatButtonBlock = () => {
        return (
            <Box className={classes.floatButtonBlock}>
                <IconButton onClick={(ev: any) => shuffle(ev)}>
                    <LoopIcon/>
                </IconButton>
                <IconButton onClick={(e: any) => changefontSize(e, 1)}>
                    <ZoomInIcon/>
                </IconButton>
                <IconButton onClick={(e: any) => changefontSize(e, -1)}>
                    <ZoomOutIcon/>
                </IconButton>
                <IconButton>
                    {!props.editMode
                        ? <EditIcon onClick={toogleEditMode}/>
                        : <SaveIcon onClick={toogleEditMode}/>
                    }
                </IconButton>
            </Box>
        )
    }


    return (
        <>
            <FloatButtonBlock/>

            <Container>
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

            </Container>


            <Paper elevation={3}>

                <ContentEditable
                    html={songContent}
                    innerRef={contentEditable}
                    disabled={!props.editMode}
                    spellCheck={'false'}
                    onChange={() => null}
                    // autoFocus={true}
                    // className={s.editable}
                    style={{fontSize: props.fontSize, padding: 10, fontFace: 'Roboto'}}
                />
            </Paper>

        </>)

}

export default Song

{/*{fabs.map((fab, index) => (*/
}
{/*    <Fab key={index} aria-label={fab.label} className={fab.className} color={fab.color}>*/
}
{/*        {fab.icon}*/
}
{/*    </Fab>*/
}
{/*))}*/
}
{/*<div className={classes.root}>*/
}
{/*    {fabs.map((fab, index) => (*/
}
{/*        <Fab aria-label={fab.label} className={fab.className} color={fab.color}>*/
}
{/*            {fab.icon}*/
}
{/*        </Fab>*/
}
{/*    ))}*/
}
{/*</div>*/
}
