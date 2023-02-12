import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Login.css";
import { Box, Button, CardActions, CardMedia, Checkbox, FormControl, FormControlLabel, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import logo from "../../components/images/logo.png";

const auth = getAuth();

export default function Login() {
    const [data, setData] = React.useState({});
    const nav = useNavigate();

    const handleInput = (event) => {
      let newInput = {[event.target.name]: event.target.value}
      setData({...data, ...newInput});
    }
    const handleSubmit = (event) => {
          event.preventDefault();
          signInWithEmailAndPassword(auth, data.email, data.password).then((response) => {
            nav('/store');
          }).catch((err)=>{
            alert(err.message);
          });
    };


    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <Card sx={{ maxWidth: 345 }} id="start-page">
          <CardContent className='start-page-text'>
            <CardMedia
              component="img"
              width={"100%"}
              image={logo}
              alt="Paella dish"
              sx={{padding:"20px"}}
            />
            <Typography variant="h4" color="text.secondary">SAYLANI WALFARE</Typography>
            <Typography variant="body2" color="text.secondary">ONLINE DISCOUNT STORE</Typography>
          </CardContent>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(event)=>{handleSubmit(event)}}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              onChange={(event) => {handleInput(event)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => {handleInput(event)}}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/signup' variant="body2">
                  {"Don't have an Account? Signup"}
                </Link>
              </Grid>
            </Grid>
          </Box>
    </Card>
    </div>
  );
}