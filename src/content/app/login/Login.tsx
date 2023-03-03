import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Copyright from 'src/shared/copyright/Copyright';


const Login = () => {

  const [isSubmit, setIsSubmit] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmit(true);
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    setUserData({...userData, email, password});
  }

  useEffect(() => {
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (isSubmit) {
      const url = "http://165.232.189.29:8080/clubapp/public/test";
      const response = fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/plain',
          'Access-Control-Allow-Origin': '*'
        },
        method: 'POST',
        body: JSON.stringify(userData)
      }).then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        console.log(response);
        // navigate("/", { replace: true });
        console.log('Login success')
      });
    }
  }, [isSubmit, userData]);

  return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
              <TextField
                margin="normal" required fullWidth
                id="email" label="Email Address" name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal" required fullWidth
                id="password" name="password" label="Password" type="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>
            </Box>

            <Copyright  sx={{ mt: 5 }} />

          </Box>
        </Grid>
  );
}

export default Login;