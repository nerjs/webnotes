import React, { useCallback } from 'react'
import gql from 'graphql-tag'
import MakeCoreDialog from './MakeCoreDialog'
import { useMutation } from '@apollo/react-hooks'

const ADD_NOTE = gql`
    mutation($kind: Kind!, $parent: ID, $note: NoteInput!) {
        make: addNote(kind: $kind, parent: $parent, note: $note) {
            id
            kind
            title
            text
        }
    }
`

const AddNote = ({ parent, onClose, onSubmit }) => {
    const [addNote, { loading, error, data }] = useMutation(ADD_NOTE)

    const variablesFilter = useCallback(
        (kind, note) => ({
            variables: {
                parent,
                kind,
                note,
            },
        }),
        [parent],
    )

    return (
        <MakeCoreDialog
            title="Add note"
            mutation={addNote}
            variablesFilter={variablesFilter}
            errorPath="addNote"
            onSubmit={onSubmit}
            onClose={onClose}
            submitText="Add"
        />
    )
}

export default AddNote
