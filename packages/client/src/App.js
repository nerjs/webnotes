import React from 'react'
import HomeRoute from './routes/Home'
import CoreProvider from 'data/CoreProvider'
import { homeRoute, usersRoute, userRoute, noteRoute, entryRoute } from 'helpers/routes'
import { Switch, Redirect } from 'react-router-dom'
import UsersRoute from 'routes/Users'
import UserRoute from 'routes/User'
import NotesRoute from 'routes/Notes'
import EntryRoute from 'routes/Entry'
import { PublicRoute } from 'helpers/route'

function App() {
    return (
        <CoreProvider>
            <Switch>
                <PublicRoute path={homeRoute.path} exact component={HomeRoute} />
                <PublicRoute path={usersRoute.path} exact component={UsersRoute} />
                <PublicRoute path={userRoute.path} exact component={UserRoute} />
                <PublicRoute path={noteRoute.path} exact component={NotesRoute} />
                <PublicRoute path={entryRoute.path} component={EntryRoute} />
                <Redirect to={homeRoute.link()} />
            </Switch>
        </CoreProvider>
    )
}

export default App
