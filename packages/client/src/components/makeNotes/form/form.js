import React, { useContext, useCallback } from 'react'
import { Formik, Form } from 'formik'
import { notes as notesSchema } from '@nbs/validate'
import ValidationClientGqlError from '@nerjs/errors/ValidationClientGqlError'
import { MakeNotesContext } from '../ctx'
import MakeNotesSubmitBtn from './btn'

const MakeNotesForm = ({ children }) => {
    const { kind, initialValues, handleSubmit } = useContext(MakeNotesContext)

    const onSubmit = useCallback(
        async (values, { setSubmitting, setErrors }) => {
            setSubmitting(true)
            try {
                await handleSubmit(values)
            } catch (e) {
                const err = ValidationClientGqlError.parseServerGqlError(e)
                if (e.map && Object.keys(e.map).length) {
                    setErrors(e.map)
                }
            }
            setSubmitting(false)
        },
        [handleSubmit],
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={notesSchema[kind]}
            onSubmit={onSubmit}
        >
            <Form>
                {children}
                <br />
                <MakeNotesSubmitBtn />
            </Form>
        </Formik>
    )
}

export default MakeNotesForm
