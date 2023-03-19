import React from 'react'
import { Avatar, Box, Button, Card, CardMedia, CardContent, Grid, Stack, Typography, IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BlogComponent = () => {
    return (
        <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 0, md: 4 }, backgroundColor: "#fcf4eb" }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}  >
                    <Typography fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >DaCode Blog</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                    <Box py={3} >
                        <Button sx={{ bgcolor: "#FF5B2E" }} variant='contained' >Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Card sx={{ borderRadius: '16px' }} >
                        <CardContent sx={{ bgcolor: 'white', display: {md: 'flex', sm : ''}, alignContent: "center" }}  >
                            <CardMedia  >
                              <div style={{display:"flex", justifyContent:"center"}}>
                                <Avatar sx={{ width: 160, height: 180 }} alt="favpng" variant="rounded" src="https://static.wixstatic.com/media/3e3a39_4b14591dabfa46759b7cfa73cb97ad19~mv2.jpg/v1/fill/w_550,h_452,al_c,q_80,enc_auto/3e3a39_4b14591dabfa46759b7cfa73cb97ad19~mv2.jpg" />
                                </div>
                            </CardMedia>
                            <Stack px={2}  >
                                <Typography py={1} fontWeight='bold' fontFamily='Poppins'>Why Your SaaS Business should use WordPress</Typography>
                                <Typography >A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</Typography>
                               <div style={{textAlign:'center'}} >
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