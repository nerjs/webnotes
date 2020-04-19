import React, { useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useFormikContext } from 'formik'
import { MakeNotesContext } from '../ctx'

const MakeNotesSubmitBtn = () => {
    const { isSubmitting, errors, validateForm } = useFormikContext()
    const {
        kind,
        actions: { submit: submitAction, cancel: cancelAction },
    } = useContext(MakeNotesContext)

    useEffect(() => {
        validateForm()
    }, [kind, validateForm])

    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ marginTop: 10 }}
        >
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting || Object.keys(errors).some(key => !!errors[key])}
            >
                {submitAction.text}
            </Button>
            {cancelAction && (
                <Button color="secondary" onClick={cancelAction.handler}>
                    {cancelAction.text}
                </Button>
            )}
        </Grid>
    )
}

export default MakeNotesSubmitBtn
