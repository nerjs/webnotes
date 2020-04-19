import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { useFormikContext } from 'formik'

const MakeNotesSubmitBtn = ({ kind }) => {
    const { isSubmitting, errors, validateForm } = useFormikContext()

    useEffect(() => {
        validateForm()
    }, [kind, validateForm])

    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            disabled={isSubmitting || Object.keys(errors).some(key => !!errors[key])}
        >
            Submit
        </Button>
    )
}

export default MakeNotesSubmitBtn
