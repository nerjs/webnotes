import GqlProvider from '@nerjs/gql/provider'
import React from 'react'

const {
    REACT_APP_API_SERVER_HOST,
    REACT_APP_API_SERVER_PORT,
    REACT_APP_API_SERVER_PATH,
    REACT_APP_SUBSCRIBE_SERVER_PATH,
} = process.env

const { urlGql, wsUrlGql } = (() => {
    const wsPort = window.location.protocol.includes('https') ? 'wss:' : 'ws:'
    const gqlPort = window.location.protocol

    const port = REACT_APP_API_SERVER_PORT ? `:${REACT_APP_API_SERVER_PORT}` : ''

    return {
        urlGql: `${gqlPort}//${REACT_APP_API_SERVER_HOST}${port}${REACT_APP_API_SERVER_PATH}`,
        wsUrlGql: `${wsPort}//${REACT_APP_API_SERVER_HOST}${port}${REACT_APP_SUBSCRIBE_SERVER_PATH}`,
    }
})()

const GqlDataProvider = ({ children }) => {
    return (
        <GqlProvider
            uri={urlGql}
            wsUri={wsUrlGql}
            httpOptions={{
                credentials: 'include',
            }}
        >
            {children}
        </GqlProvider>
    )
}

export default GqlDataProvider
