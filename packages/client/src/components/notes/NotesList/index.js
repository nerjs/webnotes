import React from 'react'
import { ListPanel } from '../panel'
import NotesListInner from './List'

const NotesList = ({ root, id, owner, title, parent, parentTitle, ownerLogin }) => {
    return (
        <>
            <ListPanel
                owner={owner}
                title={title}
                id={id || null}
                parent={parent}
                parentTitle={parentTitle}
                root={root}
                ownerLogin={ownerLogin}
            />
            <NotesListInner root={root} owner={owner} parent={id} />
        </>
    )
}

export default NotesList
