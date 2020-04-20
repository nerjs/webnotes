import React from 'react'
import { TextField } from 'components/fields'

const MakeDirFields = () => {
    return (
        <>
            <TextField name="title" label="Label" required />
            <TextField name="text" label="Description" />
        </>
    )
}

export default MakeDirFields
