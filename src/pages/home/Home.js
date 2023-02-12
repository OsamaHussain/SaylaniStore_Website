import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import logo from "../../components/images/logo.png";
import "./Home.css";
import { Button, CardActions, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

  const nav = useNavigate();
  const login = () => {
    nav('/login');
  }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <Card sx={{ maxWidth: 345 }} id="start-page">
          <CardMedia
            component="img"
            width={"100%"}
            image={logo}
            alt="Paella dish"
            sx={{padding:"20px"}}
          />
          <CardContent className='start-page-text'>
            <Typography variant="h4" color="text.secondary">SAYLANI WALFARE</Typography>
            <Typography variant="body2" color="text.secondary">ONLINE DISCOUNT STORE</Typography>
          </CardContent>
          <Button onClick={login}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get Started
          </Button>
    </Card>
    </div>
  );
}