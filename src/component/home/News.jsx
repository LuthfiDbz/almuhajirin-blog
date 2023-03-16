import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeroImg from "../../assets/hero.JPG"
import NewsImg1 from "../../assets/news1.png"
import NewsImg2 from "../../assets/news2.jpg"
import NewsImg3 from "../../assets/news3.jpeg"
import { Link, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

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
    >
      {/* <Grid container spacing={2}> */}
        <Typography variant='h3' sx={{ fontWeight: 'bold', mt: 1 }}>BERITA DAN KEGIATAN TERBARU</Typography>
        <Link href="#" sx={{mt: 1}}>Lihat semua</Link>
      {/* </Grid> */}
      <Grid container spacing={2} sx={{mt: 1 }}>
        <Grid item xs={7}>
          <div
            style={{
              width: '100%',
              height: '30rem',
              backgroundImage: `url(${NewsImg1})`,
              backgroundSize: 'cover'
            }}
          ></div>
          <Typography variant='h5' sx={{ fontWeight: 'bold', mt: 5 }}><Link underline="none" color="inherit" href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi sunt maiores neque nostrum, necessitatibus temporibus ipsa quam eius ipsam.</Link></Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                height: '20rem',
                backgroundImage: `url(${NewsImg2})`,
                backgroundSize: 'cover'
              }}
            ></div>
            <Typography  variant='h6' sx={{ fontWeight: 'bold', mt: 2, mb: 3 }}><Link underline="none" color="inherit" href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi sunt maiores neque nostrum, necessitatibus temporibus ipsa quam eius ipsam.</Link></Typography>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                height: '20rem',
                backgroundImage: `url(${NewsImg3})`,
                backgroundSize: 'cover'
              }}
            ></div>
            <Typography variant='h6' sx={{ fontWeight: 'bold', mt: 2, mb: 3 }}><Link underline="none" color="inherit" href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi sunt maiores neque nostrum, necessitatibus temporibus ipsa quam eius ipsam.</Link></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default News