import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeroImg from "../../assets/hero.JPG"
import NewsImg1 from "../../assets/news1.png"
import NewsImg2 from "../../assets/news2.jpg"
import NewsImg3 from "../../assets/news3.jpeg"
import { Link, Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000000',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Article = () => {
  return (
    <Grid 
      item 
      xs={12} 
      sx={{bgcolor: 'blue' }}
    >
      <Grid item xs={10} sx={{margin: 'auto'}}>
        <Typography variant='h3' sx={{ fontWeight: 'bold', mt: 1, color: 'white'}}>ARTIKEL TERBARU</Typography>
        <Link href="#" sx={{mt: 1}}>Lihat semua</Link>
        <Grid container spacing={2} sx={{mt: 1 ,mb: 3}}>
          <Grid 
            item
            xs={3}
          >
            <div
              style={{
                width: '15rem',
                height: '15rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography 
              variant='subtitle1' color='white'
              sx={{paddingInline:'2rem'}}>Bagaimana hukum infaq uang/infaq tunai?</Typography>
          </Grid>
          <Grid 
            item
            xs={3}
          >
            <div
              style={{
                width: '15rem',
                height: '15rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography variant='subtitle1' color='white' sx={{paddingInline:'2rem'}}>Pandangan islam dan kedokteran terkait minum sambil duduk</Typography>
          </Grid>
          <Grid 
            item
            xs={3}
          >
            <div
              style={{
                width: '15rem',
                height: '15rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography variant='subtitle1' color='white' sx={{paddingInline:'2rem'}}>Tahukah kalian zaman Rasulullah ada orang buta yang rajin sholat?</Typography>
          </Grid>
          <Grid 
            item
            xs={3}
          >
            <div
              style={{
                width: '15rem',
                height: '15rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography variant='subtitle1' color='white' sx={{paddingInline:'2rem'}}>Kisah perjalanan Rasulullah Isra' Mi'raj</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Article