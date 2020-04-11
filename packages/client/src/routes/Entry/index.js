import React from 'react'
import EmptyWrapper from 'components/wrappers/EmptyWrapper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link, Redirect, Switch } from 'react-router-dom'
import RegistrationEntryRoute from './Registration'
import { entryRoute } from 'helpers/routes'
import LoginEntryRoute from './Login'
import LogoutEntryRoute from './Logout'
import { ProtectedRoute, PrivateRoute } from 'helpers/route'

const EntryRoute = ({ location: { state } }) => {
    return (
        <EmptyWrapper>
            <Card>
                <Switch>
                    <ProtectedRoute
                        path={entryRoute.registration.path}
                        component={RegistrationEntryRoute}
                    />
                    <ProtectedRoute path={entryRoute.login.path} component={LoginEntryRoute} />
                    <PrivateRoute path={entryRoute.logout.path} component={LogoutEntryRoute} />
                    <Redirect to="/" />
                </Switch>
                <CardActions>
                    {state && state.referer && state.referer !== '/' && (
                        <Link to={state.referer}>
                            <ArrowBackIcon />
                        </Link>
                    )}
                    <Button to="/" component={Link}>
                        Home
                    </Button>
                </CardActions>
            </Card>
        </EmptyWrapper>
    )
}

export default EntryRoute
