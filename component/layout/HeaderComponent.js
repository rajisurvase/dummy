import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const HeaderComponent = () => {
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
                        <Typography >Home</Typography>
                        <Typography>About</Typography>
                        <Typography>Service</Typography>
                        <Typography>Facilities</Typography>
                    </Grid>
                    <Grid textAlign={"right"} item md={4} lg={4}>
                        <Button variant='outlined' >sign up</Button>
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