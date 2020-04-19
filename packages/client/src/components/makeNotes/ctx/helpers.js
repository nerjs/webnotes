import { NOTE_TYPES, NOTE_TYPES_ARR } from '@nbs/global'
import { useState } from 'react'
import { notes as notesSchema } from '@nbs/validate'
import merge from 'merge'

const defaultInitialValues = {}

export const kindFields = {}

Object.keys(notesSchema).forEach(key => {
    kindFields[key] = []
    Object.keys(notesSchema[key].fields).forEach(fieldKey => {
        defaultInitialValues[fieldKey] = ''
        kindFields[key].push(fieldKey)
    })
})

export const useValues = ({ kind, note }) => ({
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

export const useActions = ({ submitText, onCancel, cancelText }) =>
    useState(() => ({
        submit: {
            text: submitText || 'Submit',
        },
        cancel:
            onCancel && typeof onCancel === 'function'
                ? {
                      text: cancelText || 'Cancel',
                      handler: onCancel,
                  }
                : null,
    }))[0]
