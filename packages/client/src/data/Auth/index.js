import React from 'react'
import { createContext } from 'react'
import useAuthContext from './useAuthContext'

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const contextValue = useAuthContext()
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
