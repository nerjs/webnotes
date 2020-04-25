import React, { useState, useCallback, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'
import { EditNote } from 'components/notes/Make'
import { useLocation, useHistory } from 'react-router-dom'

const EditPanelSection = ({ id, kind }) => {
    const { state } = useLocation()
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)
    const [snackBar, setSnackbar] = useState(null)

    const hideSnackbar = useCallback(() => setSnackbar(null), [setSnackbar])
    const switchShowForm = useCallback(() => setShowForm(s => !s), [setShowForm])

    const handleSubmit = useCallback(
        ({ kind, title }) => {
            setShowForm(false)
            setSnackbar(title ? `${title} edited` : `${kind} ID: ${id} Edited`)
        },
        [setShowForm, setSnackbar, id],
    )

    useEffect(() => {
        if (!state?.edit) return
        if (state.edit === id) setShowForm(true)
        history.replace(history.location.pathname, { ...state, edit: null })
    }, [state?.edit, id, history, setShowForm])

    return (
        <>
            <Tooltip title="Edit">
                <IconButton
                    color="primary"
                    size="small"
                    disabled={showForm}
                    onClick={switchShowForm}
                >
                    <EditIcon fontSize="small" />
                </IconButton>
            </Tooltip>

            {showForm && (
                <EditNote id={id} kind={kind} onClose={switchShowForm} onSubmit={handleSubmit} />
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

export default EditPanelSection
