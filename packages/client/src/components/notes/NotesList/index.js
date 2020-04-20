import React from 'react'
import { ListPanel } from '../panel'

const NotesList = ({ root, owner, parent }) => {
    return <ListPanel owner={owner} id={parent || null} />
}

export default NotesList
