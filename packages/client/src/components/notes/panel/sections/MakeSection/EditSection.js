import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'

const EditPanelSection = ({ owner, id, kind, note }) => {
    return (
        <Tooltip title="Edit">
            <IconButton color="primary" size="small">
                <EditIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    )
}

export default EditPanelSection
