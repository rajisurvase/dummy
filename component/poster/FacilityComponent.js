import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const FacilityComponent = () => {
  return (
    <Box sx={{ px: { xs: 4, md: 10 }, py:{xs : 0,md:4}, backgroundColor:"#fcf4eb" }} >
        <Grid container alignItems='center' >
            <Grid item xs={12} md={5} >
               <Typography textAlign='center' sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={35} fontWeight={50} color="000000">Facilities We Provides</Typography>
            </Grid>
            <Grid item xs={12} md={7} >
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Grid>
        </Grid>
        <Grid container py={2} alignItems='center' >
            <Grid item xs={6} md={4}  >
              <div style={{padding :"1rem"}} >
                <Typography  sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Feed Training</Typography>
                <Typography >Ut enim ad minim  velit esse cillum dolore eu fugiat..</Typography>
              </div>
              <div style={{padding :"1rem"}} >
                <Typography sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Health test</Typography>
                <Typography>tempor incididunt ut labore et dolore magna aliqua...</Typography>
              </div>
              <div style={{padding :"1rem"}} >
                <Typography sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Vaccination</Typography>
                <Typography>tempor incididunt ut labore et dolore magna aliqua...</Typography>
              </div>

            </Grid>
            <Grid item xs={0} md={4} display="flex" justifyContent='center'  >
            <Box sx={{display : {md : "block" , xs : "none"}, border: "1px solid red", borderRadius:"50%" }} p={5}>
                <img  height={300} src="https://media.istockphoto.com/id/514327594/photo/border-collie-on-his-hind-legs-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=z8ufP_F5kqTYNNt0ci_MC9jOj9mrZjIE3FAtVIb1AiI=" alt='dog' />
              </Box>
            </Grid>
            <Grid item xs={6} md={4} >
              <div style={{padding :"1rem"}} >
                <Typography sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Feed Training</Typography>
                <Typography>Ut enim ad minim  velit esse cillum dolore eu fugiat..</Typography>
              </div>
              <div style={{padding :"1rem"}} >
                <Typography sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Health test</Typography>
                <Typography>tempor incididunt ut labore et dolore magna aliqua...</Typography>
              </div>
              <div style={{padding :"1rem"}} >
                <Typography sx={{ fontWeight: "bolder" }} fontWeight={50} color="000000" fontFamily='Monospace'>Vaccination</Typography>
                <Typography>tempor incididunt ut labore et dolore magna aliqua...</Typography>
              </div>

            </Grid>
        </Grid>
    </Box>
  )
}

export default FacilityComponent