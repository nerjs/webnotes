import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const CoreProvider = ({ children }) => {
    return <BrowserRouter basename="/">{children}</BrowserRouter>
}

export default CoreProvider
