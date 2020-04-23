import React, { useState, useCallback } from 'react'
import KindIconPanelSection from './sections/KindIconSection'
import SharePanelSection from './sections/ShareSection'
import { noteRoute } from 'helpers/routes'
import Paper from '@material-ui/core/Paper'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import useAuth from 'hooks/useAuth'
import { Link } from 'react-router-dom'

const ShortItemNotesPanel = ({ id, kind, owner, children }) => {
    const [show, setShow] = useState(false)
    const { isAuth, user } = useAuth()
    const handleHover = useCallback(() => setShow(true), [setShow])
    const handleBlur = useCallback(() => setShow(false), [setShow])

    return (
        <Paper
            style={{ width: '98%', position: 'relative', margin: '5px 0', overflow: 'hidden' }}
            onMouseEnter={handleHover}
            onMouseLeave={handleBlur}
        >
            <Paper
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 2,
                    right: 2,
                }}
            >
                {show ? (
                    <>
                        <SharePanelSection path={noteRoute.link(id)} />
                        {isAuth && user && user.id === owner && (
                            <Tooltip title="edit">
                                <IconButton
                                    size="small"
                                    color="primary"
                                    component={Link}
                                    to={noteRoute.link(id, { edit: id })}
                                >
                                    <EditIcon size="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </>
                ) : (
                    <MoreHorizIcon />
                )}
            </Paper>
            <Grid container wrap="nowrap">
                <Grid item style={{ padding: 5 }}>
                    <KindIconPanelSection kind={kind} />
                </Grid>
                <Grid item style={{ width: '95%' }}>
                    {children}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ShortItemNotesPanel
