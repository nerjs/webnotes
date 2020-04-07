import React from 'react'
import HomeRoute from 'routes/Home'
import CoreProvider from 'data/CoreProvider'
import { homeRoute, usersRoute, userRoute, noteRoute } from 'helpers/routes'
import { Switch, Route } from 'react-router-dom'
import UsersRoute from 'routes/Users'
import UserRoute from 'routes/User'
import NotesRoute from 'routes/Notes'

function App() {
    return (
        <CoreProvider>
            <Switch>
                <Route path={homeRoute.path} exact component={HomeRoute} />
                <Route path={usersRoute.path} exact component={UsersRoute} />
                <Route path={userRoute.path} exact component={UserRoute} />
                <Route path={noteRoute.path} exact component={NotesRoute} />
            </Switch>
        </CoreProvider>
    )
}

export default App
