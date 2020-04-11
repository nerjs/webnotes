import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { entryRoute, userRoute } from 'helpers/routes'
import useAuth from 'hooks/useAuth'

const AuthLinks = ({ user: { id, login } }) => (
    <>
        <Button color="inherit" to={userRoute.link(id)} component={Link}>
            {login}
        </Button>
        <Button color="inherit" to={entryRoute.logout.link()} component={Link}>
            Logout
        </Button>
    </>
)

const NotAuthLinks = () => (
    <>
        <Button color="inherit" to={entryRoute.registration.link()} component={Link}>
            Registration
        </Button>
        <Button color="inherit" to={entryRoute.login.link()} component={Link}>
            Login
        </Button>
    </>
)

const UserHeaderMenu = () => {
    const { isAuth, user } = useAuth()
    return isAuth ? <AuthLinks user={user} /> : <NotAuthLinks />
}

export default UserHeaderMenu
