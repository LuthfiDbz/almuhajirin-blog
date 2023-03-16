import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hero from '../component/home/Hero';
import News from '../component/home/News';
import Article from '../component/home/Article';
import Announcement from '../component/home/Announcement';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={2}
        justifyContent="center"
        alignContent="center"
      >
        <Hero />
        <News />
        <Article />
        <Announcement />
      </Grid>
    </Box>
  );
}

export default Home;