import React from 'react'
import { noteRoute } from 'helpers/routes'
import KindIconPanelSection from '../KindIconSection'
import { Link } from 'react-router-dom'

const ParentCrumb = ({ id, kind, title }) => {
    return (
        <Link
            to={noteRoute.link(id)}
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
                textDecoration: 'none',
                color: '#3f51b5ee',
                alignItems: 'center',
            }}
        >
            <KindIconPanelSection kind={kind} />
            <span style={{ marginLeft: 5, whiteSpace: 'nowrap' }}>{title}</span>
        </Link>
    )
}

export default ParentCrumb
