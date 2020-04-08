import React from 'react'
import Header from 'components/header'
import Container from '@material-ui/core/Container'

document.body.style.margin = 0

const PageWrapper = ({ children }) => {
    return (
        <Container
            style={{
                width: '100vw',
                minWidth: '100vw',
                paddingRight: 0,
                paddingLeft: 0,
            }}
        >
            <Header />
            {children}
        </Container>
    )
}

export default PageWrapper
