import React from 'react'
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import PersonIcon from '@material-ui/icons/Person'
import { makeStyles } from '@material-ui/core/styles'
import { NOTE_TYPES } from '@nbs/global'
import UserCrumb from './UserCrumb'
import Crumb from './Crumb'
import KindIconPanelSection from '../KindIconSection'
import CurrentCrumb from './CurrentCrumb'

const useStyles = makeStyles(() => ({
    root: { marginRight: 10, width: '100%' },
    ol: { display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' },
    li: { display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' },
}))

const Breadcrumbs = ({
    id,
    owner,
    root,
    current,
    currentTitle,
    currentKind,
    parent,
    parentTitle,
    ownerLogin,
}) => {
    if (root) return <KindIconPanelSection kind={NOTE_TYPES.DIR} />

    return (
        <MuiBreadcrumbs classes={useStyles()}>
            <UserCrumb id={owner} login={ownerLogin} />
            {parent && <Crumb kind={NOTE_TYPES.DIR} id={parent} title={parentTitle} />}
            {current && <CurrentCrumb kind={currentKind} id={current} title={currentTitle} />}
        </MuiBreadcrumbs>
    )
}

export default Breadcrumbs
