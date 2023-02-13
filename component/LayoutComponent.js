import { Typography, Grid, Button } from '@mui/material';

const LayoutComponent =()=>{
    return(
        <Grid container justifyContent="space-around" px={10} pt={1} alignItems="center" >
           <Grid item xs={12} sm={12} md={4} lg={4} >
              <Typography  fontFamily='Monospace' fontSize={25}  fontWeight="bold" color="000000" >Mew</Typography>
           </Grid>
           <Grid item display={"flex"} justifyContent="space-around"  xs={12} sm={12} md={4} lg={4}>        
             <Typography >Home</Typography>
             <Typography>About</Typography>
             <Typography>Service</Typography>
             <Typography>Facilities</Typography>
           </Grid>
           <Grid textAlign={"right"} item xs={12} sm={12} md={4} lg={4}>
            <Button  variant='outlined' >sign up</Button>
           </Grid>
        </Grid>
    )
}

export default LayoutComponent