import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { usersRoute, homeRoute } from 'helpers/routes'

const ListItemLink = props => <ListItem button component={Link} {...props} />

const Menu = ({ open, onClose }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItemLink to={homeRoute.link()}>Home</ListItemLink>
                <ListItemLink to={usersRoute.link()}>Users</ListItemLink>
            </List>
        </Drawer>
    )
}

export default Menu
