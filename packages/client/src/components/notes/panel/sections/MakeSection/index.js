import React from 'react'
import useAuth from 'hooks/useAuth'
import { NOTE_TYPES } from '@webnotes/global'
import AddPanelSection from './AddSection'
import EditPanelSection from './EditSection'

const MakePanelSection = ({ kind, id, owner }) => {
    const { isAuth, user } = useAuth()

    if (!isAuth || !user || owner !== user?.id) return null

    return (
        <>
            {kind === NOTE_TYPES.DIR && <AddPanelSection owner={owner} parent={id} />}
            {id && <EditPanelSection kind={kind} id={id} />}
        </>
    )
}

export default MakePanelSection
