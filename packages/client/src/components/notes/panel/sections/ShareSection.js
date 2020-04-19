import React, { useState, useCallback } from 'react'
import ShareIcon from '@material-ui/icons/Share'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const SharePanelSection = ({ path }) => {
    const [open, setOpen] = useState(false)

    const switchOpen = useCallback(() => setOpen(o => !o), [setOpen])

    return (
        <>
            <Tooltip title="Share">
                <IconButton color="secondary" size="small" disabled={open} onClick={switchOpen}>
                    <ShareIcon fontSize="small" />
                </IconButton>
            </Tooltip>

            {open && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open
                    autoHideDuration={6000}
                    onClose={switchOpen}
                    message={`Share: ${path}`}
                />
            )}
        </>
    )
}

export default SharePanelSection
