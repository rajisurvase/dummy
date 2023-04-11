import { Avatar, AvatarGroup, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const PosterComponent = () => {
    return (
        <Grid container spacing={1} sx={{ px: { xs: 2, md: 0 } }}>
            <Grid sx={{ height: { xs: '30vh', md: '60vh' },
                backgroundImage: `url(https://i.pinimg.com/736x/84/fd/a1/84fda1d2638645e09d3c0ee2645cc8d8.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                // height: "30vh",
                borderRadius: "1rem"
            }} item xs={12} sm={12} md={4} lg={4}   >
            <Box sx={{display: {md: "block" , xs : "none"}}} >
                <img style={{ position: "absolute", width: "15%", left: "25%", top: "30%", borderRadius: "1rem" }} src="https://img.freepik.com/premium-photo/front-view-domestic-cute-dog-with-scarf_23-2148643145.jpg?w=2000" alt="alt" />
            </Box>
            </Grid>
            <Grid item md={1} lg={1} xs={0} sm={0}></Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}  >
                <Box container mx-auto sx={{ px: { xs: 0, md: 10 }, pt: { xs: 0, md: 5 } , textAlign :{xs:'center', md:"left"} }}  >
                    <Typography sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={35} fontWeight={50} color="000000" >We take care of your pet and help them to grow</Typography>
                    <Typography pt={2} fontSize={20} fontFamily='Poppins' >Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</Typography>
                    <Box display={"flex"} sx={{ mt: { xs: 0, md: 2 }, justifyContent :{ xs :'center', md:"left"} }} py={2} alignContent="center"  >
                        <Button size='small' variant='contained' sx={{ backgroundColor: "#FF5B2E" }} >Contact us</Button>
                        <AvatarGroup max={4} sx={{ px: 2 }} >
                            <Avatar sx={{ width: 48, height: 48 }} alt="Remy Sharp" src="https://assets.vogue.in/photos/62502b8d90038a40f11ff27c/2:3/w_2560%2Cc_limit/Dog%25202.png" />
                            <Avatar sx={{ width: 48, height: 48 }} alt="Travis Howard" src="https://www.portphillip.vic.gov.au/media/l4bc2xgo/copp_local-laws_pets-of-port-phillip_web-banner_0622.jpg?center=0.57191619158284612,0.52646229440739711&mode=crop&width=710&height=710&rnd=133005394387900000" />
                            <Avatar sx={{ width: 48, height: 48 }} alt="Cindy Baker" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg" />
                            <Avatar sx={{ width: 48, height: 48 }} alt="Agnes Walker" src="https://assets.vogue.in/photos/62502b8d90038a40f11ff27c/2:3/w_2560%2Cc_limit/Dog%25202.png" />
                            <Avatar sx={{ width: 48, height: 48 }} alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg" />
                        </AvatarGroup>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={35} fontWeight={50} color="000000">How to take care </Typography>
                        <Typography fontSize={20} fontFamily='Poppins'>perfect one you will like it. It’s our promise.</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PosterComponent