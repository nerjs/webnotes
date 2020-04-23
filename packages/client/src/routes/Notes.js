import React from 'react'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useRouteMatch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { NOTE_TYPES } from '@nbs/global'
import { NotesList, NoteItem } from 'components/notes'

const GET_NOTE = gql`
    query($noteId: ID!) {
        note(id: $noteId) {
            id
            kind
            title
            owner {
                id
                login
            }
            parent {
                id
                title
            }
        }
    }
`

const NoteRouteInner = ({ id, kind, title, owner, parent }) => {
    const props = {
        id,
        kind,
        title,
        root: false,
        owner: owner?.id,
        ownerLogin: owner.login,
        parent: parent?.id,
        parentTitle: parent?.title,
    }

    return kind === NOTE_TYPES.DIR ? <NotesList {...props} /> : <NoteItem {...props} />
}

const NotesRoute = () => {
    const {
        params: { noteId },
    } = useRouteMatch()

    const { loading, error, data } = useQuery(GET_NOTE, {
        variables: { noteId },
    })

    return (
        <PageWrapper>
            {loading && <LinearProgress />}
            {!error && data?.note && <NoteRouteInner {...data.note} />}
            <br />
            <pre>{JSON.stringify({ noteId, loading, error, data }, null, 4)}</pre>
        </PageWrapper>
    )
}

export default NotesRoute
