import { NOTE_TYPES, NOTE_TYPES_ARR } from '@nbs/global'
import { useState, useCallback } from 'react'
import { notes as notesSchema } from '@nbs/validate'
import merge from 'merge'

const defaultInitialValues = {}

const kindFields = {}

Object.keys(notesSchema).forEach(key => {
    kindFields[key] = []
    Object.keys(notesSchema[key].fields).forEach(fieldKey => {
        defaultInitialValues[fieldKey] = ''
        kindFields[key].push(fieldKey)
    })
})

console.log(kindFields)

const useValues = ({ kind, note }) => ({
    initialValues: useState(() => merge.recursive({}, defaultInitialValues, note))[0],
    blockedKind: useState(
        () =>
            new Set(
                kind
                    ? kind === NOTE_TYPES.DIR
                        ? NOTE_TYPES_ARR.filter(nt => nt !== NOTE_TYPES.DIR)
                        : [NOTE_TYPES.DIR]
                    : [],
            ),
    )[0],
})

export default props => {
    const [kind, setKind] = useState(props.kind || NOTE_TYPES.DIR)

    const { initialValues, blockedKind } = useValues(props)

    const changeKind = useCallback(
        (e, newKind) => {
            if (NOTE_TYPES_ARR.includes(newKind)) {
                setKind(newKind)
            }
        },
        [setKind],
    )

    const handleSubmit = useCallback(
        values =>
            props.onSubmit(
                kindFields[kind].reduce((obj, field) => {
                    obj[field] = values[field]
                    return obj
                }, {}),
            ),
        [kind, props.onSubmit],
    )

    return { kind, changeKind, initialValues, blockedKind, handleSubmit }
}
