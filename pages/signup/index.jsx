import { Visibility } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { pink } from '@mui/material/colors';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: "", email: "", number: "", password: "", confirmPassword: "" });
  // const [userName,setUserName] = useState()
  const router = useRouter()

  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();
     console.log(userInfo)
  }
  // const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4} textAlign={"center"} padding={3}>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardContent>
                  <Typography p={3} >Sign Up</Typography>
                 
                  <TextField fullWidth id="standard-basic" type="text" label="Name" variant="standard" value={userInfo.name}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, name: target.value })
                    } />
                  <TextField fullWidth sx={{ mt: 2 }} id="standard-basic" type="email" label="Username" variant="standard" value={userInfo.email}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, email: target.value })
                    } />
                  <TextField fullWidth sx={{ mt: 2 }} id="standard-basic" type="text"  maxLength={10} 
                    label="Phone Number" variant="standard" value={userInfo.number}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, number: target.value })
                    } />

                  <FormControl fullWidth variant="standard" sx={{ mt: 2 }}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={userInfo.password}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth variant="standard" sx={{ mt: 2 }}>
                    <InputLabel htmlFor="standard-adornment-password"> Confirm Password</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={userInfo.confirmPasswordpassword}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, confirmPassword: target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormGroup textAlign="left" sx={{ pt: 2 }} display='flex' alignItem="center" >
                    <FormControlLabel  control={<Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}  />} 
                   label={<Typography>I accept the <Link href="/terms_conditions"> terms and conditions </Link></Typography>}
                 />
                
                  </FormGroup>

                  <Button fullWidth sx={{ mt: 2,backgroundColor: "#FF5B2E" }} variant="contained" type="submit">Sign up</Button>
                  <Typography sx={{mt: 2  }} textAlign="center">Already a user ?
                  <Link  href="/login" > Login </Link></Typography>
                </CardContent>
              </Card>
            </form>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>
    </div>
    // <div>SignUp</div>
  )
}

export default SignUp