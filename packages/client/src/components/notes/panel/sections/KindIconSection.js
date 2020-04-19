import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { NOTE_TYPES } from '@nbs/global'
import kindIcons from '../../../icons/kind'

const titles = {
    [NOTE_TYPES.DIR]: 'Folder',
}

const KindIconPanelSection = ({ kind }) => {
    const Icon = kindIcons[kind]
    return (
        <Tooltip title={titles[kind] || kind}>
            <Icon fontSize="small" style={{ opacity: 0.7 }} />
        </Tooltip>
    )
}

export default KindIconPanelSection
