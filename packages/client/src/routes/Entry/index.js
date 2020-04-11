import React from 'react'
import EmptyWrapper from 'components/wrappers/EmptyWrapper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link, Route, Redirect, Switch } from 'react-router-dom'
import RegistrationEntryRoute from './Registration'
import { entryRoute } from 'helpers/routes'
import LoginEntryRoute from './Login'
import LogoutEntryRoute from './Logout'

const EntryRoute = ({ location: { state } }) => {
    return (
        <EmptyWrapper>
            <Card>
                <Switch>
                    <Route path={entryRoute.registration.path} component={RegistrationEntryRoute} />
                    <Route path={entryRoute.login.path} component={LoginEntryRoute} />
                    <Route path={entryRoute.logout.path} component={LogoutEntryRoute} />
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
