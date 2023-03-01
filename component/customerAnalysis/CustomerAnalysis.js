import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const CustomerAnalysis = () => {
    return (
        <Grid container  sx={{ px: { xs: 4, md: 10 }, py:{xs : 0,md:4} }}>
            <Grid item xs={12} md={7} >
                <Box p={8} borderRadius={5} display="flex" justifyContent="space-around" style={{ background: 'linear-gradient(to right bottom, #FF5D31, #FF5B2E)' }} >
                    <Stack display="flex"  >
                        <Typography textAlign="center" >Adopted</Typography>
                        <Typography>2500+</Typography>
                    </Stack>
                    <hr />
                    <Stack>
                        <Typography>Adopted</Typography>
                        <Typography>2500+</Typography>
                    </Stack>
                    <hr />
                    <Stack>
                        <Typography>Adopted</Typography>
                        <Typography>2500+</Typography>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={5} >
                <Box p={4} borderRadius={5} style={{ background: 'linear-gradient(to right bottom, #009F97, #00C8BD)' }} >
                    <Typography>Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod tempor incididu ut labore et quis nostrud sed do eius .....</Typography>
                    <Stack display="flex" justifyContent="end" >
                    <Grid container >
                       <Grid item xs={6} >  
                       <hr width="100%" textAlign="left" />
                        <Typography fontFamily='Slackey'>Daniel Kahneman</Typography>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="flex-end" >
                        <Avatar alt="Remy Sharp"  src="/static/images/avatar/1.jpg" />
                        </Grid>
                    </Grid>
                        {/* <div>
                        <hr width="100%" textAlign="left" />
                        <Typography>Daniel Kahneman</Typography>
                        </div> */}
                        {/* <Avatar alt="Remy Sharp"  src="/static/images/avatar/1.jpg" /> */}
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CustomerAnalysis