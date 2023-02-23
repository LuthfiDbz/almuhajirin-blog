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

const News = () => {
  return (
    <Grid 
      item 
      xs={10} 
      sx={{height: '100vh'}}
    >
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <h1>Main news</h1>
        </Grid>
        <Grid item xs={5}>
          <h1>Side News</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default News