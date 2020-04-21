import React from 'react'
import { ListPanel } from '../panel'
import NotesListInner from './List'

const NotesList = ({ root, owner, parent }) => {
    return (
        <>
            <ListPanel owner={owner} id={parent || null} />
            <NotesListInner root={root} owner={owner} parent={parent} />
        </>
    )
}

export default NotesList
