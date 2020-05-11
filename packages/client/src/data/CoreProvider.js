import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import GqlDataProvider from './GqlDataProvider'
import AuthProvider from './Auth'
import ErrorHandlingProvider from './ErrorHandling'

const Router = process.env.REACT_APP_HASH_ROUTER ? HashRouter : BrowserRouter

const CoreProvider = ({ children }) => {
    return (
        <GqlDataProvider>
            <AuthProvider>
                <Router basename="/">{children} </Router>
            </AuthProvider>
            <ErrorHandlingProvider />
        </GqlDataProvider>
    )
}

export default CoreProvider
