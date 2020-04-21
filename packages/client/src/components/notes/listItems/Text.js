import React from 'react'
import ShortItemNotesPanel from '../panel/ShortItemPanel'
import { Link } from 'react-router-dom'
import { noteRoute } from 'helpers/routes'

const TextListItem = ({ id, kind, ...props }) => {
    const title = props.title || props.text
    const text = props.title ? props.text : null

    return (
        <ShortItemNotesPanel kind={kind} id={id}>
            <Link style={{ textDecoration: 'none', color: '#444' }} to={noteRoute.link(id)}>
                <div style={{ fontSize: 15, fontWeight: 600, padding: 5, paddingBottom: 0 }}>
                    {title}
                </div>
                {text && <div style={{ fontSize: 14, color: '#666' }}>{text}</div>}
            </Link>
        </ShortItemNotesPanel>
    )
}

export default TextListItem
