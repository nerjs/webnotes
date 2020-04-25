import React from 'react'
import Panel from './Panel'
import SharePanelSection from './sections/ShareSection'
import MakePanelSection from './sections/MakeSection'
import Breadcrumbs from './sections/Breadcrumbs'

const ItemNotesPanel = ({ id, kind, owner, root, title, parent, parentTitle, ownerLogin }) => {
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
                currentKind={kind}
            />
            <MakePanelSection kind={kind} owner={owner} id={id} />
            <SharePanelSection />
        </Panel>
    )
}

export default ItemNotesPanel
