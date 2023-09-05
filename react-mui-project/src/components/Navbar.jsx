import { Apple, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const SearchBar = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
        display: (props) => (props.open ? 'flex' : 'none'),
        width: '40%'
    }
})
)

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}))


const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' component='div' sx={{ display: { xs: "none", sm: "block" } }}>
                    Social Media
                </Typography>
                <Apple sx={{ display: { xs: "block", sm: "block" } }} />
                <SearchBar><InputBase placeholder='search...' /></SearchBar>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Avatar
                            onClick={e => setOpen(true)}
                            sx={{ width: 25, height: 25 }}
                            alt="Remy Sharp"
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                        />
                    </Badge>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Typography 
// @ts-ignore
                    variant='span' component='div' sx={{ display: { xs: "block", sm: "block" } }}>
                        John Doe
                    </Typography>
                    <Avatar sx={{ width: 25, height: 25 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar