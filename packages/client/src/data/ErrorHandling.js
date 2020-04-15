import React, { useState, useEffect, useCallback } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import useGqlErrors from '@nerjs/gql/useGqlErrors'
import ClientGqlError from '@nerjs/errors/ClientGqlError'

const AlertError = ({ error, onClose, idx }) => {
    const handlerClose = useCallback(
        (event, reason) => (!reason || reason === 'timeout') && onClose(error),
        [error, onClose],
    )

    return (
        <Snackbar
            open
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            autoHideDuration={15000}
            onClose={handlerClose}
            style={{
                transform: `translateY(-${100 * idx + 15 * idx}%)`,
            }}
        >
            <Alert elevation={6} severity="error" onClose={handlerClose}>
                {error.message}
            </Alert>
        </Snackbar>
    )
}

const ErrorHandlingProvider = () => {
    const [errors, setErrors] = useState([])
    const { lastError } = useGqlErrors()

    const handleClose = useCallback(err => setErrors(eArr => eArr.filter(e => e !== err)), [
        setErrors,
    ])

    useEffect(() => {
        if (!lastError) return
        const { networkError, graphQLErrors, operation } = lastError

        if (networkError) {
            setErrors(err => [...err, networkError])
        } else if (graphQLErrors && Array.isArray(graphQLErrors)) {
            const newErrors = []
            console.log(graphQLErrors)
            graphQLErrors.forEach(({ message, path, extensions }, idx) => {
                const err = new ClientGqlError(message, path, extensions)
                err.index = `${Date.now()}_${idx}`
                if (err.code !== ClientGqlError.codes.VALIDATION) newErrors.push(err)
            })
            if (newErrors.length) setErrors(err => [...err, ...newErrors])
        }
    }, [setErrors, lastError])

    return errors.map((err, idx) => (
        <AlertError key={err.index} idx={idx} error={err} onClose={handleClose} />
    ))
}

export default ErrorHandlingProvider
