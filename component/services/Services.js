import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 0, md: 4 } }}>
            <Typography textAlign='center' sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={40} fontWeight={50} color="000000" >Our Services</Typography>
            <Typography textAlign='center' >Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</Typography>
        </Box>
    )
}

export default Services