import * as React from 'react';

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import bg from './homebanner_mr_s.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'src/content/app/login/Login';
import Register from 'src/content/app/register/Register';

const theme = createTheme();

const Home = () => {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            // backgroundImage: 'url(src/assets/images/club-logo-full.png)',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Routes>
          <Route index element={<Login />}></Route>
        </Routes>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;