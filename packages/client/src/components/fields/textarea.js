import React from 'react'
import MUTextField from '@material-ui/core/TextField'
import { useField } from 'formik'

const TextField = ({ name, type, label, required }) => {
    const [field, meta] = useField(name)

    const error = meta.touched && meta.error
    const labelTxt = label ? `${label}${required ? '*' : ''}` : undefined

    return (
        <MUTextField
            type={type}
            {...field}
            placeholder={labelTxt}
            label={labelTxt}
            fullWidth
            variant="outlined"
            margin="dense"
            error={!!error}
            helperText={error}
            multiline
            rowsMax={5}
        />
    )
}

export default TextField
