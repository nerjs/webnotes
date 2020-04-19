import React from 'react'
import { Formik, Form, useFormikContext } from 'formik'
import { notes as notesSchema } from '@nbs/validate'
import { NOTE_TYPES } from '@nbs/global'
import { TextField } from 'components/fields'

const MakeDirFields = ({ initialValues, onChange }) => {
    return (
        <>
            <TextField name="title" label="Label" required />
            <TextField name="text" label="Description" />
        </>
    )
}

export default MakeDirFields
