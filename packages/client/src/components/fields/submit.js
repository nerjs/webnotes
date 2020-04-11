import React from 'react'
import Button from '@material-ui/core/Button'
import { useFormikContext } from 'formik'

const SubmitField = () => {
    const { isSubmitting, errors, values } = useFormikContext()

    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            disabled={
                isSubmitting ||
                Object.keys(errors).some(key => !!errors[key]) ||
                Object.keys(values).some(key => !values[key])
            }
        >
            Submit
        </Button>
    )
}

export default SubmitField
