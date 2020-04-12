import React, { useCallback } from 'react'
import useAuth from 'hooks/useAuth'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Formik, Form } from 'formik'
import { registration as registrationSchema } from '@nbs/validate/auth'
import { TextField, SubmitField } from 'components/fields'
import { useHistory, useLocation } from 'react-router-dom'
import AlertError from './AlertError'
import useBody from 'hooks/useBody'

const RegistrationEntryRoute = () => {
    const history = useHistory()
    const { state } = useLocation()
    const { registration } = useAuth()
    useBody({ title: 'Registration', icon: '/icons/key.png' })

    const handleSubmit = useCallback(
        async (values, { setSubmitting, setStatus, setErrors }) => {
            setSubmitting(true)
            try {
                if (await registration(values)) history.push(state?.referer || '/', null)
            } catch (e) {
                if (e.map && Object.keys(e.map).length) {
                    setErrors(e.map)
                } else {
                    setStatus(e.message)
                }
                setSubmitting(false)
            }
        },
        [registration, history, state?.referer],
    )

    return (
        <>
            <CardHeader title="Registration" />
            <CardContent>
                <Formik
                    initialValues={{ login: '', password: '', confirmPassword: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={registrationSchema}
                >
                    <Form>
                        <AlertError />
                        <TextField name="login" label="login" type="text" required />
                        <TextField name="password" label="password" type="text" required />
                        <TextField
                            name="confirmPassword"
                            label="confirm password"
                            type="text"
                            required
                        />
                        <SubmitField />
                    </Form>
                </Formik>
            </CardContent>
        </>
    )
}

export default RegistrationEntryRoute
