import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Signup.css";
import { Box, Button, CardActions, CardMedia, Checkbox, FormControl, FormControlLabel, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { app } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import logo from "../../components/images/logo.png";

const auth = getAuth();

export default function Signup() {
    const [data, setData] = React.useState({});

    const handleInput = (event) => {
      let newInput = {[event.target.name]: event.target.value}
      setData({...data, ...newInput});
    }
    const handleSubmit = (event) => {
          event.preventDefault();
          createUserWithEmailAndPassword(auth, data.email, data.password).then((response) => {
            alert("Successful");
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
              height={"20%"}
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
              id="name"
              label="Full Name"
              name="name"
              autoFocus
              onChange={(event) => {handleInput(event)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact"
              label="Contact"
              id="contact"
              onChange={(event) => {handleInput(event)}}
            />
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
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/login' variant="body2">
                  {"Already have an Account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
    </Card>
    </div>
  );
}