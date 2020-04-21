import React from 'react'
import listItems from '../listItems'

const ListItemInner = props => {
    const ListItem = listItems[props.kind]

    return <ListItem {...props} />
}

export default ListItemInner
