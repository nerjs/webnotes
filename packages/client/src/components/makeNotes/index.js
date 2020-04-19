import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MakeNotesTabs from './Tabs'
import MakeNotesBody from './Body'
import { MakeNotesProvider } from './ctx'

const MakeNotes = props => {
    return (
        <Card>
            <MakeNotesProvider {...props}>
                <CardContent>
                    <MakeNotesTabs />
                    <MakeNotesBody />
                </CardContent>
            </MakeNotesProvider>
        </Card>
    )
}

export default MakeNotes
