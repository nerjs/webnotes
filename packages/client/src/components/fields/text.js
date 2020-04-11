import React from 'react'
import MUTextField from '@material-ui/core/TextField'
import { useField } from 'formik'

const TextField = ({ name, type, label }) => {
    const [field, meta] = useField(name)

    const error = meta.touched && meta.error
    return (
        <MUTextField
            type={type}
            {...field}
            placeholder={label}
            label={label}
            fullWidth
            variant="outlined"
            margin="dense"
            error={!!error}
            helperText={error}
        />
    )
}

export default TextField
