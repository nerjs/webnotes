import React from 'react'
import Grid from '@material-ui/core/Grid'
import PageWrapper from 'components/wrappers/PageWrapper'
import UserSidebar from 'components/userSeidebar'
import NoteList from 'components/noteList'
import useUserLoginToId from 'hooks/useUserLoginToId'
import Alert from '@material-ui/lab/Alert'
import LinearProgress from '@material-ui/core/LinearProgress'

const UserRoute = ({ match: { params } }) => {
    const { loading, error, userId, userLogin } = useUserLoginToId(params)

    return (
        <PageWrapper>
            {loading && <LinearProgress />}
            {!loading && (error || !userId) && (
                <Alert severity="error">{(error && error.message) || 'User not found'}</Alert>
            )}
            {userId && (
                <Grid container spacing={1}>
                    <Grid item md={3}>
                        <UserSidebar userId={userId} />
                    </Grid>
                    <Grid item md={9}>
                        <NoteList userId={userId} />
                    </Grid>
                </Grid>
            )}
        </PageWrapper>
    )
}

export default UserRoute
