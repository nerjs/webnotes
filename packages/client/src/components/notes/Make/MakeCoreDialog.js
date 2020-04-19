import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import MakeNotes from 'components/makeNotes'

const MakeCoreDialog = ({ title, onClose, ...props }) => {
    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <MakeNotes {...props} cancelText="Close" onCancel={onClose} />
            </DialogContent>
        </Dialog>
    )
}

export default MakeCoreDialog
