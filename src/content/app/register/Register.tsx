import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Copyright from 'src/shared/copyright/Copyright';


const Register = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
              Member Registration
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField  
                margin="normal" required fullWidth 
                name="fname" id="fname" label="First name"
                autoComplete="fname" autoFocus
              />
              <TextField 
                margin="normal" required fullWidth 
                name="lname" id="lname" label="Last name"
                autoComplete="lname" autoFocus
              />
              <TextField 
                margin="normal" required fullWidth 
                name="dob" label="Date of birth" type="date"
                InputLabelProps={{ shrink: true }} 
              />
              <TextField 
                margin="normal" required fullWidth multiline rows={2} maxRows={2}
                name="address" label="Full address"
              />
              <TextField 
                margin="normal" required fullWidth 
                name="phone" label="Phone" type="tel"
              />
              <Button
                fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Register
              </Button>
            </Box>

            <Copyright  sx={{ mt: 5 }} />

          </Box>
        </Grid>
  );
}

export default Register;