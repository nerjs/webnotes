import React, { useState, useCallback } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './menu'
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
                    <UserHeaderMenu />
                </Toolbar>
            </AppBar>
            <Menu open={menuOpen} onClose={switchMenu} />
        </>
    )
}

export default Header
