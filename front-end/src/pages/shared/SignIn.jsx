import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useNavigate} from 'react-router-dom'

import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [userType, setuserType] = React.useState('');
  const navigate = useNavigate();
  // const history = useHistory();

  const handleChange = (event) => {
    setuserType(event.target.value);
    console.log(event.target.value)
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const load = {
      username: data.get("username"),
      userType: data.get("userType"),
      password: data.get("password")
    }
    console.log(load);

    // localStorage.setItem('userType', load.userType);
    if (!load.username || !load.password) return;


    // launch an axios request to http://8000/api/login and get back response and redirect based on the request code
    const response = await axios.post('http://localhost:8000/api/login', load)

    console.log(response);
    const responseCode= response.status;
    const responseData = response.data;

    console.log(responseCode, responseData);

     navigate('/dashboard',  {state: {userType:"admin"} } );

    // if (responseCode.status === 201) {
      
    


    // }
      














    
    // navigate('/dashboard', {replace:true,  state: {userType: load.userType} } );
    //     try {
    //   const resp = await fetch("http://localhost:8000/api/login", {
      
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(load),
    //     credentials:'include'
      
    //   })

    //     if (!resp.ok) {
    //     // If the server returns an HTTP status code other than 2xx,
    //     // handle it based on the status code:
    //     switch (resp.status) {
  //       case 400: // Bad Request
  //         // Handle 400 error
  //         break;
  //       case 401: // Unauthorized
  //         // Handle 401 error
  //         break;
  //       // Add more cases as needed
  //       default:
  //         // Handle other errors
    //     }
    //     return;
    //   }

    //   const resData = await resp.json()
    //   console.log(resData)

    //   // Check if a cookie is set
    //   if (document.cookie) {
    //     // If a cookie is set, navigate to the dashboard
    //     navigate('/dashboard');
    //      // history.push({'/dashboard', state:{usertype: resData.userType}}); }
    //   } else {
    //     // If a cookie is not set, handle it
    //   }
    // } catch (err) {
    //   // If the fetch fails (e.g., due to network issues), handle it
    //   console.log(err);
    // }

  };

  //save this jwt token from reesponse into cookies either using axios or document.cookies....

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >User Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userType}
                  label="userType"
                  name='userType'
                  onChange={handleChange}
                  required
                >
                  <MenuItem value={'admin'}>Admin</MenuItem>
                  <MenuItem value={'station'}>Station Manager</MenuItem>
                  <MenuItem value={'siding'}>Siding Manager</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              
              autoFocus
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          </Box>

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )


}