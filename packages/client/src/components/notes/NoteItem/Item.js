import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Paper } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

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

const style = {
    display: 'block',
    maxWidth: '95%',
    margin: '2px auto',
}

const Item = ({ id }) => {
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } })

    return (
        <Paper>
            {loading && <LinearProgress />}
            {data?.note && (
                <>
                    {data.note.title && <h3 style={{ ...style }}>{data.note.title}</h3>}
                    {data.note.text && <p style={{ ...style }}>{data.note.text}</p>}
                    {data.note.url && (
                        <a href={data.note.url} targer="_blank" style={{ ...style }}>
                            {data.note.url}
                        </a>
                    )}
                </>
            )}
        </Paper>
    )
}

export default Item
