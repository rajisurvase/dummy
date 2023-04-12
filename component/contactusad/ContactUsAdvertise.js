import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { pink } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import Image from 'next/image';
import Link from 'next/link';


const ContactUsAdvertise = () => {
    return (
        <Grid container justifyContent="space-around" sx={{ px: { xs: 4, md: 10 } }} alignItems="center" >
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <Typography fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >Lets book a call and stay connected</Typography>
                <FormControlLabel pt={2} control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }} />} label="Vaccination Service" />
                <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }} />} label="Veterinary Service" />
                <Typography py={3} >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                <Stack direction="row" spacing={2}>
                  <Link href=" /booking">  <Button color="error" variant="contained" >
                        Book a Schedule
                    </Button>
                    </Link>
                    
                      <Link href="tel:+918007795515"> <Button  startIcon={<CallIcon />}>Emergency Call </Button></Link> 
                   
                </Stack>
            </Grid>
            <Grid textAlign='center' item xs={12} sm={12} md={6} lg={6} >
                <img width={"70%"} src="https://live.staticflickr.com/8595/15636300633_ee6874c53f_z.jpg" alt="alt" />
            </Grid>

        </Grid>
    )
}

export default ContactUsAdvertise