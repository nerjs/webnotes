import React, { useState, useCallback } from 'react'
import Panel from './Panel'
import KindIconPanelSection from './sections/KindIconSection'
import SharePanelSection from './sections/ShareSection'
import { noteRoute } from 'helpers/routes'
import Paper from '@material-ui/core/Paper'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Grid } from '@material-ui/core'

const ShortItemNotesPanel = ({ id, kind, children }) => {
    const [show, setShow] = useState(false)
    const handleHover = useCallback(() => setShow(true), [setShow])
    const handleBlur = useCallback(() => setShow(false), [setShow])

    return (
        <Paper
            style={{ width: '98%', position: 'relative', margin: '5px 0' }}
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
                    </>
                ) : (
                    <MoreHorizIcon />
                )}
            </Paper>
            <Grid container wrap="nowrap">
                <Grid item style={{ padding: 5 }}>
                    <KindIconPanelSection kind={kind} />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    {children}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ShortItemNotesPanel
