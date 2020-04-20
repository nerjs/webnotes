import React, { useState, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Tooltip from '@material-ui/core/Tooltip'
import { AddNote } from 'components/notes/Make'

const AddPanelSection = ({ owner, parent }) => {
    const [showForm, setShowForm] = useState(false)
    const [snackBar, setSnackbar] = useState(null)

    const hideSnackbar = useCallback(() => setSnackbar(null), [setSnackbar])

    const switchShowForm = useCallback(() => setShowForm(s => !s), [setShowForm])

    const handleSubmit = useCallback(
        ({ id, kind, title }) => {
            setShowForm(false)
            setSnackbar(title ? `${title} added` : `${kind} ID: ${id} Added`)
        },
        [setShowForm, setSnackbar],
    )

    return (
        <>
            <Tooltip title="Add note">
                <IconButton
                    color="primary"
                    size="small"
                    disabled={showForm}
                    onClick={switchShowForm}
                >
                    <AddBoxIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            {showForm && (
                <AddNote
                    parent={parent}
                    owner={owner}
                    onClose={switchShowForm}
                    onSubmit={handleSubmit}
                />
            )}

            {snackBar && (
                <Snackbar open autoHideDuration={6000} onClose={hideSnackbar}>
                    <Alert onClose={hideSnackbar} severity="success">
                        {snackBar}
                    </Alert>
                </Snackbar>
            )}
        </>
    )
}

export default AddPanelSection
