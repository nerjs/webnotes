import React from 'react'
import { ItemPanel } from '../panel'
import Item from './Item'

const NoteItem = ({ root, id, kind, owner, title, parent, parentTitle, ownerLogin }) => {
    return (
        <>
            <ItemPanel
                owner={owner}
                title={title}
                id={id || null}
                kind={kind}
                parent={parent}
                parentTitle={parentTitle}
                root={root}
                ownerLogin={ownerLogin}
            />
            <Item id={id} />
        </>
    )
}

export default NoteItem
