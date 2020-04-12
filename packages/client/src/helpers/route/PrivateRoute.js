import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const PrivateRoute = ({ redirect = '/', component: Component, ...rest }) => {
    const { isAuth } = useAuth()

    return isAuth ? (
        <Route {...rest} component={Component} />
    ) : (
        <Route {...rest} render={() => <Redirect to={redirect} />} />
    )
}

export default PrivateRoute
