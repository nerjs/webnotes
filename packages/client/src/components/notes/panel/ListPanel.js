import React from 'react'
import { NOTE_TYPES } from '@nbs/global'
import Panel from './Panel'
import KindIconPanelSection from './sections/KindIconSection'
import SharePanelSection from './sections/ShareSection'
import MakePanelSection from './sections/MakeSection'

const ListNotesPanel = ({ id, owner }) => {
    return (
        <Panel>
            <KindIconPanelSection kind={NOTE_TYPES.DIR} />
            <div style={{ width: '100%' }} />
            <MakePanelSection kind={NOTE_TYPES.DIR} owner={owner} id={id} />
            <SharePanelSection />
        </Panel>
    )
}

export default ListNotesPanel
