import React, { useCallback } from 'react'
import MakeCoreDialog from './MakeCoreDialog'

const AddNote = ({ parent, onClose }) => {
    const handleSubmit = useCallback((...args) => console.log('add submit', args), [])

    return (
        <MakeCoreDialog
            title="Add note"
            onClose={onClose}
            submitText="Add"
            onSubmit={handleSubmit}
        />
    )
}

export default AddNote
