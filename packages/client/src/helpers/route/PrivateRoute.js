import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const PrivateRoute = ({ redirect = '/', component: Component, ...rest }) => {
    const { isAuth, loading } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                if (loading) return null
                return isAuth ? <Component {...props} /> : <Redirect to={redirect} />
            }}
        />
    )
}

export default PrivateRoute
