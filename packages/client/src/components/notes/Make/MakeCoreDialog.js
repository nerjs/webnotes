import React, { useCallback, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import MakeNotes from 'components/makeNotes'
import ValidationClientGqlError from '@nerjs/errors/ValidationClientGqlError'
import LinearProgress from '@material-ui/core/LinearProgress'

const MakeCoreDialog = ({
    title,
    mutation,
    variablesFilter,
    onSubmit,
    onClose,
    errorPath,
    ...props
}) => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = useCallback(
        async (...args) => {
            setLoading(true)
            try {
                const { data } = await mutation(variablesFilter(...args))
                setLoading(false)
                onSubmit((data || {}).make)
            } catch (e) {
                const err = ValidationClientGqlError.parseServerGqlError(e, 'make')
                console.log({ ...err })
                if (err.hasResults) {
                    Object.keys(err.map).forEach(key => {
                        err.map[key.replace(/^note\./, '')] = err.map[key]
                    })
                }
                setLoading(false)
                throw err
            }
        },
        [mutation, variablesFilter, onSubmit, setLoading],
    )

    return (
        <Dialog open onClose={onClose}>
            {loading && <LinearProgress />}
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <MakeNotes
                    {...props}
                    cancelText="Close"
                    onCancel={onClose}
                    onSubmit={handleSubmit}
                />
            </DialogContent>
        </Dialog>
    )
}

export default MakeCoreDialog
