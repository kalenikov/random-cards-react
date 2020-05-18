import * as React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {Button, LinearProgress} from '@material-ui/core'
import {TextField} from 'formik-material-ui'
import {CheckboxWithLabel} from 'formik-material-ui';
import {connect} from 'react-redux'
import {addSongThunk} from '../../redux/thunks'
import history from '../../common/history';

const NewSongForm = (props) => (

    <Formik
        initialValues={{
            name: '',
            content: '',
            favor: false
        }}
        validate={(values) => {
            console.log('validate')
            const errors = {}
            if (!values.name) {
                errors.name = 'Enter song name'
            }
            if (!values.content) {
                errors.text = 'Enter song text'
            }
            return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
            props.addSongThunk(history, values.name, values.content, false)
            setSubmitting(false)
                // console.log(JSON.stringify(values, null, 2))
        }}>
        {({submitForm, isSubmitting, errors, touched, handleBlur, values, handleChange}) => (
            <Form>
                <Field
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Song name"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                />

                <ErrorMessage name="name"/>

                <Field
                    component={CheckboxWithLabel}
                    name="favor"
                    type={'checkbox'}
                    Label={{label: 'Add to favor?'}}
                />;

                <Field
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    rows={window.innerHeight / 50}
                    id="content"
                    label="Song text"
                    name="content"
                    multiline
                    onChange={handleChange}
                />
                {touched.text && errors.text
                    ? <div>{errors.text}</div>
                    : null}
                <br/>


                {isSubmitting && <LinearProgress/>}

                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}>
                    Save
                </Button>
            </Form>
        )}
    </Formik>
)

export default connect(null, {addSongThunk})(NewSongForm)
