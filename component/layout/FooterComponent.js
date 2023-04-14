import { Avatar, Box, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const FooterComponent = () => {
  const handleTypography =(_item)=>{
 return  <Typography py={2} fontFamily='Monospace' fontSize={20} fontWeight="bold" color="000000" >{_item}</Typography>
  }

  const handleFooter =(s)=>{
    return <Typography py={1} >{s}</Typography>
  }
     
  return (
    <Box sx={{ px: { xs: 4, md: 10 }, py: { xs: 1, md: 4 }, backgroundColor: "#ffefde" }}>
    <Grid container justifyContent="space-around" >
        <Grid item  xs={12} md={6} lg={6} >
        <Box sx={{display:"flex"}} alignItems='center' >
          <div display={"flex"}   >
             <Avatar sx={{width: 60, height: 60}}  alt="Travis Howard" src="https://www.creativehatti.com/wp-content/uploads/2022/07/Pet-lover-vector-mascot-logo-template-55-small.jpg" />
          </div>
          <Typography pl={4} fontFamily='Monospace' fontSize={25} fontWeight="bold" color="000000" >Mew</Typography>
        </Box>
        <Typography py={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim  velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <div >
            <Link href="https://www.facebook.com/">
              <IconButton>
                <FacebookIcon color='primary' />
              </IconButton>
              </Link>
             <Link href="https://twitter.com/"> <IconButton>
                <TwitterIcon color='primary' />
              </IconButton>
              </Link>
              <Link href="https://www.linkedin.com/">
              <IconButton>
                <LinkedInIcon color='primary' />
              </IconButton>
              </Link>
              
              <Link href="https://www.instagram.com/"> 
              <IconButton>
                <InstagramIcon color='error' />
              </IconButton>
              </Link>
            </div>
        </Grid>
        <Grid item  xs={12} md={6} lg={6}>
          <Grid container >
            <Grid item xs={4} >
            {handleTypography('Useful links')}
            <Link href="/faq" style={{textDecoration: 'none'}}>
             {handleFooter('FAQs')}
             </Link>
             <Link href="/product" style={{textDecoration: 'none'}}>
             {handleFooter('Shops')}
             </Link>
             <Link href="/terms_conditions" style={{textDecoration: 'none'}}>
             {handleFooter(' Privacy Policy')}
             </Link>
             <Link href="/terms_conditions" style={{textDecoration: 'none'}}>
 
             {handleFooter(' Terms of Use')}
             </Link>
             {handleFooter('Site Map')}
            </Grid>
            <Grid item xs={4}  >
            {handleTypography("Explore")}
            <Link href="/about" style={{textDecoration: 'none'}}>
            {handleFooter('About Us')} 
            </Link> 
            <Link href="/services" style={{textDecoration: 'none'}}>
            {handleFooter('Services')}
            </Link>
            <Link href="/groomers" style={{textDecoration: 'none'}}>
            {handleFooter(' Our Team')}
            </Link>
            {handleFooter(' Adopt Pet')}
            </Grid>
            <Grid item xs={4} >
            {handleTypography("Contact Info")}
            {handleFooter('361-777-5681 ')}
            {handleFooter('654 White Avenue')}
            {handleFooter('Portland, TX 78374')}
            </Grid>
            
           </Grid>
        </Grid>
        
    </Grid>
    <Divider /> 
     <Box>
         <Typography py={2} textAlign={'center'}>Developed in 2023 | Anjali Naragude (Full Stack developer)</Typography>
     </Box>
</Box>

  )
}

export default FooterComponent