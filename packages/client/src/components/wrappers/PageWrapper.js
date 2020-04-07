import React from 'react'
import Header from 'components/header'

const PageWrapper = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default PageWrapper
