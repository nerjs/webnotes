import React from 'react'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import Alert from '@material-ui/lab/Alert'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserInfo from './UserInfo'

const GET_USER = gql`
    query($id: ID!) {
        getUser: user(id: $id) {
            id
            login
            createdAt
            updatedAt
        }
    }
`

const UserSidebar = ({ userId }) => {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: {
            id: userId,
        },
    })

    return (
        <Paper>
            {loading && <LinearProgress />}
            {error && <Alert severity="error">{error.message}</Alert>}
            {data && data.getUser ? (
                <UserInfo {...data.getUser} />
            ) : (
                <Alert severity="error">User not found</Alert>
            )}
        </Paper>
    )
}

export default UserSidebar
