import React from 'react'
import Container from '@material-ui/core/Container'

const EmptyWrapper = ({ children }) => {
    return <Container maxWidth="sm">{children}</Container>
}

export default EmptyWrapper
