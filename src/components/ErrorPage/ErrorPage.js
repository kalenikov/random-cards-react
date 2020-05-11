import Typography from "@material-ui/core/Typography"
import React from "react"

const ErrorPage = ({error}) => {
    return <Typography variant={'h1'}>
        {error}
    </Typography>
}

export default ErrorPage
