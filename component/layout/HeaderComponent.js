import { Avatar, Box, Button, Grid, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

const HeaderComponent = () => {
    const { data: session } = useSession()
    console.log("data", session?.user?.name)
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid container justifyContent="space-around" px={10} pt={1} alignItems="center" >
                    <Grid item md={4} lg={4} >
                        <Typography fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >Mew</Typography>
                    </Grid>
                    <Grid item display={"flex"} justifyContent="space-around" md={4} lg={4}>
                        <Link href="/">
                            <Typography >Home</Typography>
                        </Link>
                        <Link href="/about">
                            <Typography>About</Typography>
                        </Link>
                        <Link href="/services">
                            <Typography>Service</Typography>
                        </Link>
                        <Link href="/facilities">
                            <Typography>Facilities</Typography>
                        </Link>
                    </Grid>
                    <Grid textAlign={"right"} item md={4} lg={4}>
                        {session ? (<>
                            <Stack onClick={handleClick} direction="row-reverse" alignItems='center' textAlign={"right"} spacing={2}>
                                <Typography> {session?.user?.name}</Typography>
                                <Avatar alt="Travis Howard" src="https://pps.whatsapp.net/v/t61.24694-24/340349463_600118588812810_3148407190670697096_n.jpg?ccb=11-4&oh=01_AdTOZHdkVp6cE-qzRohHz8P47s0Q7lEZBAcj-fDr2uSMRg&oe=64424F50" />

                            </Stack>
                            <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open2}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        </>) : <Button variant='outlined' onClick={() => { signIn(); }} >sign in</Button>}
                       
                    </Grid>
                    
                </Grid>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Grid container pt={1} >
                    <Grid item pb={1} xs={12} textAlign="center" >
                        <Button variant="outlined" onClick={handleOpen} startIcon={<MenuIcon />}>
                            Menu
                        </Button>
                    </Grid>
                    <Grid item xs={12} textAlign="center" >
                        {open && (
                            <>
                             <Link href="/">
                                <Typography py={0.5} > Home </Typography>
                                </Link>
                                <Link href="/about">
                                <Typography py={0.5} >About</Typography>
                                </Link>
                                <Link href="/services">
                                <Typography py={0.5} >Service</Typography>
                                </Link>
                                <Link href="/facilities">
                                <Typography py={0.5} >Facilities</Typography>
                                </Link>
                                {session?.user?.name ?
                                    <Typography> Sign Out</Typography>
                                    : <Typography py={0.5} sx={{ cursor: "pointer" }} onClick={() => { signIn(); }} >Sign in</Typography>}

                            </>
                        )}

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HeaderComponent