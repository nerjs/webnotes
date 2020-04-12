import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const ProtectedRoute = ({ redirect = '/', component: Component, ...rest }) => {
    const { isAuth, loading } = useAuth()

    return !isAuth ? (
        <Route {...rest} component={Component} />
    ) : (
        <Route {...rest} render={() => <Redirect to={redirect} />} />
    )
}

export default ProtectedRoute
