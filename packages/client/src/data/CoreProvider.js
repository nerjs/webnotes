import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GqlDataProvider from './GqlDataProvider'
import AuthProvider from './Auth'

const CoreProvider = ({ children }) => {
    return (
        <GqlDataProvider>
            <AuthProvider>
                <BrowserRouter basename="/">{children}</BrowserRouter>
            </AuthProvider>
        </GqlDataProvider>
    )
}

export default CoreProvider
