import React, { useContext } from 'react'
import { NOTE_TYPES, NOTE_TYPES_ARR } from '@nbs/global'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import LinkIcon from '@material-ui/icons/Link'
import { MakeNotesContext } from './ctx'

const icons = {
    [NOTE_TYPES.DIR]: <CreateNewFolderIcon />,
    [NOTE_TYPES.TEXT]: <TextFieldsIcon />,
    [NOTE_TYPES.LINK]: <LinkIcon />,
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
                    label={icons[nt] ? undefined : nt}
                    icon={icons[nt]}
                    value={nt}
                    disabled={blockedKind.has(nt)}
                />
            ))}
        </Tabs>
    )
}

export default MakeNotesTabs
