import GqlProvider from '@nerjs/gql/provider'
import React from 'react'

const {
    REACT_APP_API_SERVER_HOST,
    REACT_APP_API_SERVER_PORT,
    REACT_APP_API_SERVER_PATH,
} = process.env

const urlGql = `${window.location.protocol}//${REACT_APP_API_SERVER_HOST}:${REACT_APP_API_SERVER_PORT}/${REACT_APP_API_SERVER_PATH}`

const GqlDataProvider = ({ children }) => {
    return <GqlProvider uri={urlGql}>{children}</GqlProvider>
}

export default GqlDataProvider
