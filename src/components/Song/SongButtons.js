import {Box, IconButton} from '@material-ui/core'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import LoopIcon from '@material-ui/icons/Loop'
import SaveIcon from '@material-ui/icons/Save'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import React from 'react'

const useStyles = makeStyles((theme) =>
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

export const FloatButtonBlock = (props) => {
    const classes = useStyles()

    return (
        <Box className={classes.floatButtonBlock}>
            <IconButton onClick={(ev) => props.shuffle(ev)}>
                <LoopIcon/>
            </IconButton>
            <IconButton onClick={(e) => props.changefontSize(e, 1)}>
                <ZoomInIcon/>
            </IconButton>
            <IconButton onClick={(e) => props.changefontSize(e, -1)}>
                <ZoomOutIcon/>
            </IconButton>
            <IconButton onClick={props.toogleEditMode}>
                {!props.editMode
                    ? <EditIcon />
                    : <SaveIcon />
                }
            </IconButton>

        </Box>
    )
}
