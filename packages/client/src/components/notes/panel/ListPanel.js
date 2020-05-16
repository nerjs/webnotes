import React from 'react'
import { NOTE_TYPES } from '@webnotes/global'
import Panel from './Panel'
import SharePanelSection from './sections/ShareSection'
import MakePanelSection from './sections/MakeSection'
import Breadcrumbs from './sections/Breadcrumbs'

const ListNotesPanel = ({ id, owner, root, title, parent, parentTitle, ownerLogin }) => {
    return (
        <Panel>
            <Breadcrumbs
                root={root}
                owner={owner}
                ownerLogin={ownerLogin}
                parent={parent}
                parentTitle={parentTitle}
                current={id}
                currentTitle={title}
                currentKind={NOTE_TYPES.DIR}
            />
            <MakePanelSection kind={NOTE_TYPES.DIR} owner={owner} id={id} />
            <SharePanelSection />
        </Panel>
    )
}

export default ListNotesPanel
