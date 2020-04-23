import React from 'react'
import { noteRoute } from 'helpers/routes'
import KindIconPanelSection from '../KindIconSection'
import { Link } from 'react-router-dom'

const CurrentCrumb = ({ id, kind, title }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
                textDecoration: 'none',
                color: '#3339',
                alignItems: 'center',
            }}
        >
            <KindIconPanelSection kind={kind} />
            <span style={{ marginLeft: 5, whiteSpace: 'nowrap' }}>{title}</span>
        </div>
    )
}

export default CurrentCrumb
