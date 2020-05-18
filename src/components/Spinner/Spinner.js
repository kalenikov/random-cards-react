import CircularProgress from "@material-ui/core/CircularProgress"
import Container from '@material-ui/core/Container'
import LinearProgress from "@material-ui/core/LinearProgress"
import React from 'react'

const Spinner = () => {
    // return <CircularProgress />

    return <Container>
        <LinearProgress />
    </Container>
}

export default Spinner
