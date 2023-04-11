import React from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'

const Groomers = () => {
  return (
    <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 0, md: 4 }, backgroundColor: "#ffefde" }}>
            <Typography textAlign='center' sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={35} fontWeight={50} color="000000" >Our Groomers</Typography>
            <Grid container spacing={4} pt={2} >
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Remy Sharp"
                              src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1678964752~exp=1678965352~hmac=bc50c9f72dbb53a807a27d63db880d3e89d00e5a5499b49cd33fc2e20b384531"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Adam Smith
                            </Typography>

                            <Typography variant="body2">
                            Veterinarian
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Morgan Mark"
                              src="https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=2000"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Morgan Mark
                            </Typography>

                            <Typography variant="body2">
                            Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Ana Fargun"
                              src="https://img.freepik.com/free-photo/photo-thinking-young-african-american-male-with-curly-dark-hair-wearing-blue-sweater-touches-chin-look-up-isolated-beige-background-with-copyspace_295783-2755.jpg?w=2000"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Ana Fargun
                            </Typography>

                            <Typography variant="body2">
                            Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Mouran Maz"
                              src="https://img.freepik.com/free-photo/onjoyed-young-dark-haired-curly-dark-skinned-man-with-beard-raising-surprisedly-eyebrows-while-looking-happily-with-wide-mouth-opened-isolated-purple_295783-7840.jpg?w=2000"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Mouran Maz
                            </Typography>

                            <Typography variant="body2">
                            Care Taker
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Morgan Mark"
                              src="https://pps.whatsapp.net/v/t61.24694-24/340349463_600118588812810_3148407190670697096_n.jpg?ccb=11-4&oh=01_AdTOZHdkVp6cE-qzRohHz8P47s0Q7lEZBAcj-fDr2uSMRg&oe=64424F50"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Piraji Survase
                            </Typography>

                            <Typography variant="body2">
                            Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Mouran Maz"
                              src="https://pps.whatsapp.net/v/t61.24694-24/340624669_948608422961099_1010399487687162542_n.jpg?ccb=11-4&oh=01_AdT3jaEJbOSnNvcGY8ALnI4kXbjwDfj9t8jMKrJt-qFgSQ&oe=644244D6"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Vishnu Reddy
                            </Typography>

                            <Typography variant="body2">
                            Care Taker
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Remy Sharp"
                              src="https://pps.whatsapp.net/v/t61.24694-24/184140303_6116915645002756_4017228071664361179_n.jpg?ccb=11-4&oh=01_AdQaBDiL-T4yCv2gbTOBWRxQS2EkqZmswLNkPBq6eW-Lyg&oe=64425DA4"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Ram Smith
                            </Typography>

                            <Typography variant="body2">
                            Veterinarian
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Mouran Maz"
                              src="https://www.shutterstock.com/image-photo/woman-smiling-perfect-smile-418038124"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Anjali Sharma
                            </Typography>

                            <Typography variant="body2">
                            Care Taker
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Morgan Mark"
                              src="https://pps.whatsapp.net/v/t61.24694-24/340349463_600118588812810_3148407190670697096_n.jpg?ccb=11-4&oh=01_AdTOZHdkVp6cE-qzRohHz8P47s0Q7lEZBAcj-fDr2uSMRg&oe=64424F50"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                              Ashok Reddy
                            </Typography>

                            <Typography variant="body2">
                            Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center"  >
                    <Card sx={{ borderRadius: '16px', mb: { xs: 0, md: 5 } }} >
                        <CardContent sx={{ bgcolor: '#FFE4C8' }} >
                          <div style={{ justifyContent: "center", display: "flex" }}>
                          <Avatar 
                             alt="Morgan Mark"
                              src="https://pps.whatsapp.net/v/t61.24694-24/340349463_600118588812810_3148407190670697096_n.jpg?ccb=11-4&oh=01_AdTOZHdkVp6cE-qzRohHz8P47s0Q7lEZBAcj-fDr2uSMRg&oe=64424F50"
                               sx={{ width: 150, height: 150 }}
                          />
                           </div>
                            <Typography fontWeight='600' fontFamily= 'Poppins' variant="h6" pt={2} component="div">
                            Sid Kapur
                            </Typography>

                            <Typography variant="body2">
                            Trainer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                

            </Grid>
            {/* <Box textAlign="center" py={3} > */}
           {/* <Link href="/groomers"> <Button sx={{bgcolor:"#FF5B2E"}} variant='contained' >View Team</Button></Link> */}
            {/* </Box> */}
    </Box>
  )
}

export default Groomers