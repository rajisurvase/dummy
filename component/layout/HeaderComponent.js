import { Avatar, Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
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
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid container justifyContent="space-around" px={10} pt={1} alignItems="center" >
                    <Grid item md={4} lg={4} >
                        <Typography fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >Mew</Typography>
                    </Grid>
                    <Grid item display={"flex"} justifyContent="space-around" md={4} lg={4}>
                        <Link href="/home">
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
                            <Stack direction="row-reverse" alignItems='center' textAlign={"right"} spacing={2}>
                            <Typography> {session?.user?.name}</Typography>
                            <Avatar alt="Travis Howard" src="data:image/jpeg;base64,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" />

                         
                         </Stack>
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
                                <Typography py={0.5} > Home </Typography>
                                <Typography py={0.5} >About</Typography>
                                <Typography py={0.5} >Service</Typography>
                                <Typography py={0.5} >Facilities</Typography>
                            </>
                        )}

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HeaderComponent