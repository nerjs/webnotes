import React from 'react'
import ShortItemNotesPanel from '../panel/ShortItemPanel'
import { Link } from 'react-router-dom'
import { noteRoute } from 'helpers/routes'

const LinkListItem = ({ id, kind, title, text, url }) => {
    return (
        <ShortItemNotesPanel kind={kind} id={id}>
            <Link style={{ textDecoration: 'none', color: '#333' }} to={noteRoute.link(id)}>
                <div style={{ fontSize: 15, fontWeight: 600, padding: 5, paddingBottom: 0 }}>
                    {title || text || url}
                </div>
            </Link>
            <a
                href={url}
                target="_blank"
                style={{
                    fontSize: 12,
                    letterSpacing: 1.5,
                    textDecoration: 'none',
                    color: '#335',
                    marginBottom: 5,
                }}
            >
                {url}
            </a>
        </ShortItemNotesPanel>
    )
}

export default LinkListItem
