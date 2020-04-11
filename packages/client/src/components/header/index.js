import React, { useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Menu from './menu'
import { entryRoute } from 'helpers/routes'
import UserHeaderMenu from './userMenu'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const switchMenu = useCallback(() => setMenuOpen(o => !o), [setMenuOpen])

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={switchMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flexGrow: 1 }} variant="h6">
                        News
                    </Typography>
                    {/* <Button color="inherit" to={entryRoute.registration.link()} component={Link}>
                        Registration
                    </Button>
                    <Button color="inherit" to={entryRoute.login.link()} component={Link}>
                        Login
                    </Button>
                    <Button color="inherit" to={entryRoute.logout.link()} component={Link}>
                        Logout
                    </Button> */}
                    <UserHeaderMenu />
                </Toolbar>
            </AppBar>
            <Menu open={menuOpen} onClose={switchMenu} />
        </>
    )
}

export default Header
