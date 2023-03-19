import React from 'react'
import { Avatar, Box, Button, Card, CardMedia, CardContent, Grid, Stack, Typography, IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BlogComponent = () => {
    return (
        <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 0, md: 4 }, backgroundColor: "#fcf4eb" }}>
            <Grid container >
                <Grid item xs={12} md={6} >
                    <Typography fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >DaCode Blog</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                    <Box py={3} >
                        <Button sx={{ bgcolor: "#FF5B2E" }} variant='contained' >Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Card sx={{ borderRadius: '16px' }} >
                        <CardContent sx={{ bgcolor: 'white', display: 'flex', alignContent: "center" }}  >
                            <CardMedia   >
                                <Avatar sx={{ width: 160, height: 180 }} alt="favpng" variant="rounded" src="https://img.favpng.com/10/20/0/yorkshire-terrier-puppy-siberian-husky-dog-grooming-pet-png-favpng-hLABdZcGPCL0nAff27Y23KTAc.jpg" />
                            </CardMedia>
                            <Stack px={2}  >
                                <Typography py={1} fontWeight='bold' fontFamily='Poppins'>Why Your SaaS Business should use WordPress</Typography>
                                <Typography >A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</Typography>
                               <div>
                               <IconButton sx={{bgcolor:'red'}} size="small">
                                         <ArrowBackIcon  />
                                    </IconButton>
                                    <IconButton sx={{bgcolor:'red', mx: 2}} size="small">
                                         <ArrowForwardIcon />
                                    </IconButton>
                               </div>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BlogComponent