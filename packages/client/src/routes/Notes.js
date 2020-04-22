import React from 'react'
import PageWrapper from 'components/wrappers/PageWrapper'
import { useLocation } from 'react-router-dom'

const NotesRoute = () => {
    const { state } = useLocation()
    return (
        <PageWrapper>
            Notes
            <br />
            <pre>{JSON.stringify({ state }, null, 4)}</pre>
        </PageWrapper>
    )
}

export default NotesRoute
