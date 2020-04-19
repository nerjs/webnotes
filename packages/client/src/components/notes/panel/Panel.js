import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const Panel = ({ children }) => {
    return (
        <Paper>
            <Grid
                container
                justify="flex-end"
                direction="row"
                wrap="nowrap"
                alignItems="center"
                style={{ padding: 5, paddingRight: 10, margin: '5px 0' }}
            >
                {children}
            </Grid>
        </Paper>
    )
}

export default Panel
