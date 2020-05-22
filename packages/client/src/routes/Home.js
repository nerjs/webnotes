import React from 'react'
import PageWrapper from '../components/wrappers/PageWrapper'
import useAuth from 'hooks/useAuth'

const HomeRoute = () => {
    const auth = useAuth()
    return (
        <PageWrapper>
            <h1>Home</h1>
            <hr />
            <br />
            <pre>{JSON.stringify(auth, null, 3)}</pre>
        </PageWrapper>
    )
}

export default HomeRoute
