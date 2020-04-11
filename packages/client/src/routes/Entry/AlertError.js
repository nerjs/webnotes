import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { useFormikContext } from 'formik'

const AlertError = () => {
    const { status } = useFormikContext()
    if (!status) return null
    return <Alert severity="error">{status}</Alert>
}

export default AlertError
