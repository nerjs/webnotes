import React, { useContext } from 'react'
import { NOTE_TYPES_ARR } from '@webnotes/global'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { MakeNotesContext } from './ctx'
import kindIcons from '../icons/formKind'

const tabIcon = kind => {
    const TIcon = kindIcons[kind]
    return <TIcon />
}

const MakeNotesTabs = () => {
    const { kind, changeKind, blockedKind } = useContext(MakeNotesContext)

    return (
        <Tabs
            value={kind}
            indicatorColor="primary"
            textColor="primary"
            onChange={changeKind}
            style={{ marginBottom: 10 }}
        >
            {NOTE_TYPES_ARR.map(nt => (
                <Tab
                    key={nt}
                    label={tabIcon(nt) ? undefined : nt}
                    icon={tabIcon(nt)}
                    value={nt}
                    disabled={blockedKind.has(nt)}
                />
            ))}
        </Tabs>
    )
}

export default MakeNotesTabs
