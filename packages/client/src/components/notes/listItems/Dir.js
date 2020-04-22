import React from 'react'
import ShortItemNotesPanel from '../panel/ShortItemPanel'
import { Link } from 'react-router-dom'
import { noteRoute } from 'helpers/routes'

const DirListItem = ({ kind, id, owner, title, text }) => {
    return (
        <ShortItemNotesPanel kind={kind} id={id} owner={owner}>
            <Link style={{ textDecoration: 'none', color: '#333' }} to={noteRoute.link(id)}>
                <div style={{ fontSize: 16, fontWeight: 600, padding: 5, paddingBottom: 0 }}>
                    {title}
                </div>
                {text && <div style={{ fontSize: 13, color: '#999' }}>{text}</div>}
            </Link>
        </ShortItemNotesPanel>
    )
}

export default DirListItem
