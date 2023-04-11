
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
const Forgot = () => {
    const [userInfo,setUserInfo] =useState({email: ""})
    function handleSubmit(){
    // setUserInfo(userInfo?.email)
    console.log(userInfo?.email)
    }

    return (


        <div>

            <Box >
                <Grid container spacing={2}>
                    < Grid item xs={12} md={4}></Grid>
                    <Grid item xs={12} md={4} textAlign={"center"} padding={3}>
                        <form onSubmit={handleSubmit}>
                            <Card >
                                <CardContent>
                                    <Typography p={3} >Forgot your password ?</Typography>

                                    <TextField fullWidth id="standard-basic" sx={{ mt: 2 }} type="email" label="Email" variant="standard" value={userInfo.email}
                                        onChange={({ target }) =>
                                            setUserInfo({ ...userInfo, email: target.value })
                                        } />


                                    <Button fullWidth sx={{ mt: 3 }} variant="contained" type="submit">Send</Button>
                                    <Typography sx={{ mt: 2 }} textAlign="center">
                                        <Link href="/login" >Back to Login Page</Link></Typography>
                                </CardContent>
                            </Card>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={4}></Grid>
                </Grid>
            </Box>



        </div>

    )
}
export default Forgot