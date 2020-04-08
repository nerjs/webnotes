import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GqlDataProvider from './GqlDataProvider'

const CoreProvider = ({ children }) => {
    return (
        <GqlDataProvider>
            <BrowserRouter basename="/">{children}</BrowserRouter>
        </GqlDataProvider>
    )
}

export default CoreProvider
