import React from 'react'
import ContentEditable from "react-contenteditable";
import {br2nl, nl2br} from '../../common/nl2br'
import Spinner from '../Spinner/Spinner';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Paper} from "@material-ui/core"
import {FloatButtonBlock} from './SongButtons';
import SongTitle from './SongTitle';


export type SongPropsType = {
    getRandomSongIdThunk: (history: any) => void
    history: any
    song: any
    isLoading: boolean
    fontSize: number
    editMode: boolean
    setFontSize: (size: number) => void
    toogleFavorThunk: (id: number, favor: boolean) => void
    toogleHideThunk: (id: number, hide: boolean) => void
    setEditMode: (editMode: boolean) => void
    setSongContentThunk: (id: number, sanitizedHtml: string) => void
    deleteSongThunk: (id: number) => void
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
        editable: {
            fontSize: (props: SongPropsType) => props.fontSize,
            padding: 10,
            fontFace: 'Roboto',
            // height: '100%'
        }


    }),
);


const Song: React.FunctionComponent<SongPropsType> = (props: SongPropsType) => {

    const classes = useStyles(props);
    const contentEditable: React.RefObject<HTMLInputElement> = React.createRef();

    if (props.isLoading || !props.song) {
        return <Spinner/>
    }

    const songContent = nl2br(props.song.content)

    const shuffle = (e: any) => {
        e.preventDefault()
        if (props.editMode) {
            props.setEditMode(false)
        }
        props.getRandomSongIdThunk(props.history)
    }

    const changeFontSize = (e: any, inc: number) => {
        props.setFontSize(props.fontSize + inc)
    }

    const toogleEditMode = () => {
        props.setEditMode(!props.editMode)
        if (props.editMode && contentEditable.current) {
            props.setSongContentThunk(props.song._id, br2nl(contentEditable.current.innerText))
            props.setEditMode(false)
        }
    }

    return (
        <>
            <FloatButtonBlock
                shuffle={shuffle}
                changefontSize={changeFontSize}
                toogleEditMode={toogleEditMode}
                editMode={props.editMode}/>

            <SongTitle
                song={props.song}
                editMode={props.editMode}
                toogleFavorThunk={props.toogleFavorThunk}
                toogleHideThunk={props.toogleHideThunk}
                deleteSongThunk={props.deleteSongThunk}
            />

            <Paper elevation={3}>
                <ContentEditable
                    html={songContent}
                    innerRef={contentEditable}
                    disabled={!props.editMode}
                    spellCheck={'false'}
                    onChange={() => null}
                    className={classes.editable}
                />
            </Paper>

        </>
    )
}

export default Song
