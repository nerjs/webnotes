import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import { userRoute } from 'helpers/routes'
import { timeFormat } from 'helpers/time'
import useBody from 'hooks/useBody'

const UserInfo = ({ id, login, createdAt, updatedAt }) => {
    useBody(`${login} page`)

    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <PermContactCalendarIcon />
                </ListItemIcon>
                <Link to={userRoute.link(null, login)}>
                    <Typography variant="button">{login}</Typography>
                </Link>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText>createdAt: {timeFormat(createdAt)}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText>updatedAt: {timeFormat(updatedAt)}</ListItemText>
            </ListItem>
        </List>
    )
}

export default UserInfo
