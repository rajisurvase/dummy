import { Avatar, AvatarGroup, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const PosterComponent = () => {
    return (
        <Grid pt={4} container spacing={3} >
            <Grid sx={{
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/8b1d/841b/26c186bc879fdbb5263c6e711b167fd2?Expires=1677456000&Signature=eIsJiMTPdbbz6eZTZ3gNvoN-LS09Xcipcxmf49INIa7Q0VrEWKqt1U2NMlwrFR8zYULUUMv3A2mJlADoaNgv9KoFUqc7V9yj8W5jFe2gjxZ4rrzXDD5KPc14NUoNmJ~nV0E8zUzQ4bG2Z0AVP9iHFXOZwOYh9hvbk9egCN~MaHtdjbXHmXAZ1RGM37JVT4ys2G8-eKBzQanZQq8Wxm-N~XU6SW4c9TPrWz6CW6~pMdqeDe6CFY0MCyup4okh8ISFv0dWXskSUWSGwou0uD3cNHmB-qMMjV9RNRn5yElOK02j~g17zZys33qwudEThp2tITUUkpxUHmiN7TTwq3J03g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                height: "50vh",
                borderRadius: "1rem"
            }} item xs={12} sm={12} md={4} lg={4}   >
                <img style={{ position: "absolute", width: "15%", left: "25%", top: "30%", borderRadius: "1rem" }} src="https://s3-alpha-sig.figma.com/img/6853/2d6a/1e1214a3723ba81ce2fae4ab471c82f0?Expires=1677456000&Signature=koyhti3XiXi2EcX4qeUHOnWKhbgoCIuo30B~mMZ9ZeR4A9nS9ZbzRZz2fX1tyOmsnjUU3AspxLKLcO19DR8-SeZu3xlUAK4u29jTOSZj0vOpNaisqm0TszcGTRr4cwdKfgkmSfDm5yLGKTIPYAUSQ0WC7s0T8CjKDGHfjvTOGXf8NXYtCm4eVIkwAekYFXx0HbPF2OYhXnHMcM9QpI1vRbu1Aw1wjgwGOu55DnHW1zJq5~BSqmb~RAbXwzDcBjIbocVu4If3IFoAPrhje1L4Z1J0P3dJCOVbc8oTGg~qTvN6HJ~ETYombTeuKacW1-32y2typSOgVz4U1LPFm48NWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="alt" />
            </Grid>
            <Grid item md={1} lg={1} ></Grid>
            <Grid item xs={12} sm={12} md={7} lg={7}  >
                <Box container mx-auto sx={{ p: { xs: 2, md: 10 } , textAlign :{xs:'center', md:"left"} }}  >
                    <Typography sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={40} fontWeight={50} color="000000" >We take care of your pet and help them to grow</Typography>
                    <Typography pt={2} fontSize={20} fontFamily='Poppins' >Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</Typography>
                    <Box display={"flex"} sx={{ mt: { xs: 0, md: 2 }, justifyContent :{ xs :'center', md:"left"} }} py={2} alignContent="center"  >
                        <Button variant='contained' sx={{ backgroundColor: "#FF5B2E" }} >Contact us</Button>
                        <AvatarGroup max={4} sx={{ px: 2 }} >
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://assets.vogue.in/photos/62502b8d90038a40f11ff27c/2:3/w_2560%2Cc_limit/Dog%25202.png" />
                            <Avatar sx={{ width: 56, height: 56 }} alt="Travis Howard" src="https://www.portphillip.vic.gov.au/media/l4bc2xgo/copp_local-laws_pets-of-port-phillip_web-banner_0622.jpg?center=0.57191619158284612,0.52646229440739711&mode=crop&width=710&height=710&rnd=133005394387900000" />
                            <Avatar sx={{ width: 56, height: 56 }} alt="Cindy Baker" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg" />
                            <Avatar sx={{ width: 56, height: 56 }} alt="Agnes Walker" src="https://assets.vogue.in/photos/62502b8d90038a40f11ff27c/2:3/w_2560%2Cc_limit/Dog%25202.png" />
                            <Avatar sx={{ width: 56, height: 56 }} alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg" />
                        </AvatarGroup>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: "bolder" }} fontFamily='Monospace' fontSize={40} fontWeight={50} color="000000">How to take care </Typography>
                        <Typography fontSize={20} fontFamily='Poppins'>perfect one you will like it. It’s our promise.</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default PosterComponent