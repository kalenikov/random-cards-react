import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {makeStyles} from '@material-ui/core/styles'

import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    song: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
}))


const NewSongForm__ = props => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            props.addSongThunk()
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
            {/*<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>*/}
            <Formik>
                <Field
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Song name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />

                <FormControlLabel
                    control={<Checkbox value="favor" color="primary"/>}
                    label="Add to favorite"
                />

                <Field
                    component={TextField}
                    id="outlined-multiline-static"
                    label="Song text"
                    multiline
                    fullWidth
                    rows={10}
                    className={classes.song}
                    defaultValue="Song text"
                    variant="outlined"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Save
                </Button>
            </Formik>
        </div>
    </Container>
}
