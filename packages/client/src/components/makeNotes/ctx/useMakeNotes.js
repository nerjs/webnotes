import { NOTE_TYPES, NOTE_TYPES_ARR } from '@nbs/global'
import { useState, useCallback } from 'react'
import { kindFields, useValues, useActions } from './helpers'

export default props => {
    const [kind, setKind] = useState(props.kind || NOTE_TYPES.DIR)

    const { initialValues, blockedKind } = useValues(props)

    const actions = useActions(props)

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

    return { kind, changeKind, initialValues, blockedKind, handleSubmit, actions }
}
