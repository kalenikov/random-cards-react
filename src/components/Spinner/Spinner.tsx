import CircularProgress from "@material-ui/core/CircularProgress"
import Container from '@material-ui/core/Container'
import LinearProgress from "@material-ui/core/LinearProgress"
import {makeStyles} from "@material-ui/core/styles"
import React from 'react'
import {Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        height: '97vh',
        // backgroundColor: '#a664ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spinner: {
        marginBottom: '30px'
    }
}))

const Spinner = () => {
    const styles = useStyles()

    return (
        <Container className={styles.root}>
            <CircularProgress size={100} className={styles.spinner} />
            <Typography variant={'h6'}>Songs is loading...</Typography>
        </Container>
    )
}

export default Spinner
