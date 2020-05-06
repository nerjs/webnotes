import React, { useCallback, useEffect } from 'react'
import gql from 'graphql-tag'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import MakeCoreDialog from './MakeCoreDialog'
import { useQuery, useMutation } from '@apollo/react-hooks'

const GET_NOTE = gql`
    query($id: ID!) {
        note(id: $id) {
            id
            kind
            title
            text
            url
            owner {
                id
            }
        }
    }
`

const EDIT_NOTE = gql`
    mutation($id: ID!, $note: NoteInput!) {
        make: editNote(id: $id, note: $note) {
            id
        }
    }
`

const EditNote = ({ id, kind, onClose, onSubmit }) => {
    const { loading, error, data } = useQuery(GET_NOTE, {
        variables: { id },
    })

    const [editNote] = useMutation(EDIT_NOTE)

    useEffect(() => {
        if (error) onClose()
    }, [error, onClose])

    const variablesFilter = useCallback((kind, note) => ({ variables: { id, note } }), [id])

    if (loading || !data?.note)
        return (
            <Backdrop open onClick={onClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )

    return (
        <MakeCoreDialog
            title="Edit note"
            mutation={editNote}
            variablesFilter={variablesFilter}
            errorPath="addNote"
            onSubmit={onSubmit}
            onClose={onClose}
            submitText="Edit"
            kind={kind}
            note={data.note}
        />
    )
}
export default EditNote
