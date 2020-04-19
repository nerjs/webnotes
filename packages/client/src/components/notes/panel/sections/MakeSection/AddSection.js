import React, { useState, useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Tooltip from '@material-ui/core/Tooltip'
import { AddNote } from 'components/notes/Make'

const AddPanelSection = ({ owner, parent }) => {
    const [showForm, setShowForm] = useState(false)

    const switchShowForm = useCallback(() => setShowForm(s => !s), [setShowForm])

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
            {showForm && <AddNote parent={parent} owner={owner} onClose={switchShowForm} />}
        </>
    )
}

export default AddPanelSection
