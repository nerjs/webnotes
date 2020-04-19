import React, { useContext } from 'react'
import { NOTE_TYPES, NOTE_TYPES_ARR } from '@nbs/global'
import MakeDirFields from './fields/dir'
import MakeTextFields from './fields/text'
import MakeLinkFields from './fields/link'
import { MakeNotesContext } from './ctx'
import { MakeNotesForm } from './form'

const fields = {
    [NOTE_TYPES.DIR]: MakeDirFields,
    [NOTE_TYPES.TEXT]: MakeTextFields,
    [NOTE_TYPES.LINK]: MakeLinkFields,
}

const MakeNotesBody = () => {
    const { kind } = useContext(MakeNotesContext)

    const Fields = fields[kind]

    return (
        <MakeNotesForm>
            <Fields />
        </MakeNotesForm>
    )
}

export default MakeNotesBody
