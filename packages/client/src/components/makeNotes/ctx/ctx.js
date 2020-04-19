import React, { createContext } from 'react'
import useMakeNotes from './useMakeNotes'

export const MakeNotesContext = createContext({})

export const MakeNotesProvider = ({ children, ...props }) => {
    const ctx = useMakeNotes(props)

    return <MakeNotesContext.Provider value={ctx}>{children}</MakeNotesContext.Provider>
}
