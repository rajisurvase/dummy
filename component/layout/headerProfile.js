import { Avatar, Box, Button, Link, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import Fade from '@mui/material/Fade';
import Cookies from 'js-cookie';

const HeaderProfile = ({ session }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function deleteCookie(cookieName) {
        Cookies.remove(cookieName);
      }

    return (
        <div >
            <Box
                id="fade-button"
                aria-haspopup="true"
            >
                <div style={{ display: "flex", justifyContent: "right", alignItems:'center' }} >
                    <div onClick={handleClick}>
                        <Avatar alt="Travis Howard" src="https://pps.whatsapp.net/v/t61.24694-24/340349463_600118588812810_3148407190670697096_n.jpg?ccb=11-4&oh=01_AdTOZHdkVp6cE-qzRohHz8P47s0Q7lEZBAcj-fDr2uSMRg&oe=64424F50" />
                    </div>
                    <Typography pl={3} > {session?.user?.name}</Typography>
                </div>
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            > 
                <Link href='/profile' >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={()=>deleteCookie("next-auth.session-token")}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

export default HeaderProfile