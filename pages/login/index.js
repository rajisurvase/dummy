import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Card, Grid, TextField, Typography } from "@mui/material";

const SignIn= () => {
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
     if(res.status===200){
      router.push("/")
     }
  };
  return (
    <div className="sign-in-form">
 <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Card >
            <Typography p={3} textAlign={"center"}>Login</Typography>
          <TextField  p={3} id="outlined-basic" label="Email" variant="outlined" />

          </Card>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Box>
 
      {/* <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form> */}
    </div>
  );
};

export default SignIn;