import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 0, md: 4 }, backgroundColor: "#ffefde" }}>
            <Typography textAlign='center' sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={40} fontWeight={50} color="000000" >Our Services</Typography>
            <Typography textAlign='center' >Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</Typography>
            <Grid container spacing={4} pt={2} >
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FB901A' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                            <Avatar variant="rounded" 
                                alt="injection"
                                src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/injection.png"
                            >
                            </Avatar>
                           </div>
                            <Typography fontWeight='400' fontFamily= 'Slackey' variant="h6" pt={2} component="div">
                            Vaccination
                            </Typography>

                            <Typography variant="body2">
                            Perfect one you will like it.
                            </Typography>
                            <Typography variant="body2">
                             It’s our promise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center" >
                    <Card sx={{ borderRadius: '16px', mt: { xs: 0, md: 5 } }}>
                        <CardContent >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                            <Avatar variant="rounded" 
                                alt="cat"
                                src="https://img.freepik.com/premium-vector/cute-cat-illustration-kawaii-cartoon-logo_68410-178.jpg?w=2000"
                            >
                            </Avatar>
                           </div>
                            <Typography fontFamily= 'Slackey' fontWeight='400' variant="h6" pt={2} component="div">
                            Pet Grooming
                            </Typography>

                            <Typography variant="body2">
                            Perfect one you will like it.
                            </Typography>
                            <Typography variant="body2">
                            It’s our promise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center" >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent  >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                            <Avatar variant="rounded" 
                                alt="doctor"
                                src="https://static.vecteezy.com/system/resources/thumbnails/004/343/322/small/doctor-profession-logo-vector.jpg"
                            >
                            </Avatar>
                           </div>
                            <Typography fontWeight='400' fontFamily= 'Slackey' variant="h6" pt={2} component="div">
                            Veterinary
                            </Typography>

                            <Typography variant="body2">
                            Perfect one you will like it.
                            </Typography>
                            <Typography variant="body2">
                             It’s our promise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center" >
                    <Card sx={{ borderRadius: '16px', mt: { xs: 0, md: 5 } }}>
                        <CardContent  >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                            <Avatar variant="rounded" 
                                alt="doctor"
                                src="https://media.istockphoto.com/id/1210538129/vector/wash-your-hands-frequently.jpg?s=612x612&w=0&k=20&c=y0Fpmg2_XIS4YU0F0hMERo00WnJEeqPCpkQ0XAcr1XY="
                            >
                            </Avatar>
                           </div>
                            <Typography fontWeight='400' fontFamily= 'Slackey' variant="h6" pt={2} component="div">
                            Cleaning
                            </Typography>

                            <Typography variant="body2">
                            Perfect one you will like it.
                            </Typography>
                            <Typography variant="body2">
                             It’s our promise.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box textAlign="center" py={3} >
            <Button sx={{bgcolor:"#FF5B2E"}} variant='contained' >Learn More</Button>
            </Box>
        </Box>
    )
}

export default Services