import React, { useCallback, useState } from 'react'
import useAuth from 'hooks/useAuth'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { useHistory, useLocation, Link } from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import useBody from 'hooks/useBody'

const LogoutEntryRoute = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { state } = useLocation()
    const { logout } = useAuth()
    useBody({ title: 'Logout', icon: '/icons/key.png' })

    const backLink = {
        pathname: state?.referer || '/',
        state: null,
    }

    const handlerLogout = useCallback(async () => {
        setLoading(true)
        try {
            await logout(null, backLink?.pathname)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }, [logout, history, backLink.pathname, setLoading, setError])

    return (
        <>
            <CardHeader title="Logout" subheader="exit?" />
            <CardContent>
                {error && <Alert severity="error">{error}</Alert>}
                <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        to={backLink}
                        component={Link}
                        variant="outlined"
                        style={{ minWidth: 150 }}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ minWidth: 150 }}
                        onClick={handlerLogout}
                        disabled={loading}
                    >
                        Exit
                    </Button>
                </ButtonGroup>
            </CardContent>
        </>
    )
}

export default LogoutEntryRoute
