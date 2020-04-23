import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import { Link } from 'react-router-dom'
import { userRoute } from 'helpers/routes'

const UserCrumb = ({ id, login }) => {
    return (
        <Link
            to={userRoute.link(id)}
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
                textDecoration: 'none',
                color: '#3f51b5ee',
            }}
        >
            <PersonIcon />
            {login}
        </Link>
    )
}

export default UserCrumb
