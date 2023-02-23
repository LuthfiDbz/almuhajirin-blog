import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeroImg from "../../assets/hero.JPG"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <Grid item xs={12} sx={{height: '100vh'}}>
      <img src={HeroImg} alt="" className='hero-img'/>
    </Grid>
  );
}

export default Hero