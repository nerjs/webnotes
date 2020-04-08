import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import PageWrapper from 'components/wrappers/PageWrapper'
import LinearProgress from '@material-ui/core/LinearProgress'
import Alert from '@material-ui/lab/Alert'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { userRoute } from 'helpers/routes'

const ListItemLink = props => <ListItem button component={Link} {...props} />

const GET_USERS = gql`
    query {
        allUsers: users {
            id
            login
        }
    }
`

const UsersRoute = () => {
    const { error, loading, data } = useQuery(GET_USERS)

    return (
        <PageWrapper>
            {loading && <LinearProgress />}
            {error && <Alert severity="error">{error.message}</Alert>}
            {!error && data && data.allUsers && (
                <List>
                    {data.allUsers.map(({ id, login }) => (
                        <ListItemLink key={id} to={userRoute.link(id)}>
                            {login}
                        </ListItemLink>
                    ))}
                </List>
            )}
        </PageWrapper>
    )
}

export default UsersRoute
