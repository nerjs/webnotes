import React, { useCallback } from 'react'
import MakeCoreDialog from './MakeCoreDialog'

const EditNote = ({ parent, kind, note, onClose }) => {
    const handleSubmit = useCallback((...args) => console.log('edit submit', args), [])

    return (
        <MakeCoreDialog
            title="Edit note"
            onClose={onClose}
            submitText="Add"
            onSubmit={handleSubmit}
            kind={kind}
            note={note}
        />
    )
}
export default EditNote
