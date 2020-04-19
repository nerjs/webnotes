import React from 'react'
import { TextField, TextareaField } from 'components/fields'

const MakeLinkFields = () => {
    return (
        <>
            <TextField name="title" label="Label" />
            <TextField name="text" label="Description" />
            <TextField name="url" label="Link url" required />
        </>
    )
}

export default MakeLinkFields
