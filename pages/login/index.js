import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Avatar, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Input, InputAdornment, InputLabel, Link, TextField, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter()
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (res.status === 200) {
      router.push("/")
    }
    else {
      if (userInfo.email && !userInfo.password) {
        alert("Password must be required")
      }
      else if (!userInfo.email && userInfo.password) {

        alert("User email must be required")
      }
      else {
        alert("Invalid Credential")
      }

    }
  };
  const handleClickShowPassword = () => {

    setShowPassword(!showPassword)
  }
  return (
    <div className="sign-in-form">
      <Box >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4} textAlign={"center"} padding={3}>
            <form onSubmit={handleSubmit}>
              <Card >
                <CardContent>
                  <div style={{ justifyContent: "center", display: "flex" }}>
                <Avatar  alt="Travis Howard" src="https://www.creativehatti.com/wp-content/uploads/2022/07/Pet-lover-vector-mascot-logo-template-55-small.jpg" />
                </div>
                <Typography p={1} >Sign In</Typography>
               
                  
                  <TextField fullWidth id="standard-basic" type="email" label="Username" variant="standard" value={userInfo.email}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, email: target.value })
                    } />

                  <FormControl fullWidth variant="standard">
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
                          //  onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormGroup textAlign="left" sx={{ pt: 2 }}>
                    <FormControlLabel control={<Checkbox defaultChecked  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    }}}
                    />} label="Remember me" />

                  </FormGroup>

                  <Button fullWidth sx={{ mt: 2, backgroundColor: "#FF5B2E" }} variant="contained" type="submit" >Login</Button>
                  <Typography sx={{ mt: 2 }} textAlign="left">
                    <Link href="/forgot" >Forgot Password ?</Link></Typography>
                  <Typography sx={{ mt: 2 }} textAlign="left">Do you have an account ?
                    <Link href="/signup" > Sign up  </Link>
                    </Typography>
                </CardContent>
              </Card>
            </form>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Box>


    </div>
  );
};

export default SignIn;