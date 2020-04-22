import React from 'react'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import List from '@material-ui/core/List'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import ListItemInner from './ListItem'

const GET_NOTES = gql`
    query($query: NoteQueryInput!) {
        notes(query: $query) {
            kind
            id
            title
            text
            url
        }
    }
`

const NotesListInner = ({ root, owner, parent }) => {
    const { loading, error, data } = useQuery(GET_NOTES, {
        variables: { query: { root, owner, parent, limit: 200, sort: { created: false } } },
    })

    return (
        <Paper>
            {loading && <LinearProgress />}
            {!error && data && (
                <List>
                    {data.notes.map(note => (
                        <ListItemInner key={note.id} {...note} owner={owner} />
                    ))}
                </List>
            )}
        </Paper>
    )
}

export default NotesListInner
