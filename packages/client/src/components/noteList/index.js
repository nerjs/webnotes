import React from 'react'

const NoteList = ({ noteParentId, userId, userLogin }) => {
    return <pre>{JSON.stringify({ noteParentId, userId, userLogin }, null, 3)}</pre>
}

export default NoteList
