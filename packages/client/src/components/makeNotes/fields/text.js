import React from 'react'
import { TextField, TextareaField } from 'components/fields'

const MakeTextFields = () => {
    return (
        <>
            <TextField name="title" label="Title" />
            <TextareaField name="text" label="Text" required />
        </>
    )
}

export default MakeTextFields
