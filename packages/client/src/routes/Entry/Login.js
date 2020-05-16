import React, { useCallback } from 'react'
import useAuth from 'hooks/useAuth'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Formik, Form } from 'formik'
import { login as loginSchema } from '@webnotes/validate/auth'
import { TextField, SubmitField } from 'components/fields'
import { useLocation } from 'react-router-dom'
import AlertError from './AlertError'
import useBody from 'hooks/useBody'

const LoginEntryRoute = () => {
    const { state } = useLocation()
    const { login } = useAuth()
    useBody({ title: 'Login', icon: '/icons/key.png' })

    const handleSubmit = useCallback(
        async (values, { setSubmitting, setStatus, setErrors }) => {
            setSubmitting(true)
            try {
                await login(values, state?.referer)
            } catch (e) {
                if (e.map && Object.keys(e.map).length) {
                    setErrors(e.map)
                } else {
                    setStatus(e.message)
                }
                setSubmitting(false)
            }
        },
        [login, state?.referer],
    )

    return (
        <>
            <CardHeader title="Authorization" />
            <CardContent>
                <Formik
                    initialValues={{ login: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={loginSchema}
                >
                    <Form>
                        <AlertError />
                        <TextField name="login" label="login" type="text" required />
                        <TextField name="password" label="password" type="text" required />
                        <SubmitField />
                    </Form>
                </Formik>
            </CardContent>
        </>
    )
}
export default LoginEntryRoute
