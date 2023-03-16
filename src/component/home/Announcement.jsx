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

const Announcement = () => {
  return (
    <Grid 
      item 
      xs={12}
    >
      <Grid item xs={10} sx={{margin: 'auto'}}>
        <Typography variant='h3' sx={{ fontWeight: 'bold', mt: 1}}>PENGUMUMAN</Typography>
        <Link href="#" sx={{mt: 1}}>Lihat semua</Link>
        <Grid container spacing={2} sx={{mt: 1 ,mb: 3}}>
          <Grid 
            item
            xs={4}
          >
            <div
              style={{
                width: '22rem',
                height: '22rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography 
              variant='subtitle1'
              sx={{paddingInline:'2rem', fontWeight: 'bold', mt: 1}}><Link underline="none" color="inherit" href="#">PENDAFTARAN PPDB TAHUN AJARAN 2023/2024 DIBUKAA!!</Link></Typography>
          </Grid>
          <Grid 
            item
            xs={4}
          >
            <div
              style={{
                width: '22rem',
                height: '22rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography variant='subtitle1' sx={{paddingInline:'2rem', fontWeight: 'bold', mt: 1}}><Link underline="none" color="inherit" href="#">PENERIMAAN SANTRI BARU AL-MUHAJIRIN DITUTUP!! SAMPAI KETEMU DI PPDB TAHUN BERIKUTNYA</Link></Typography>
          </Grid>
          <Grid 
            item
            xs={4}
          >
            <div
              style={{
                width: '22rem',
                height: '22rem',
                backgroundColor: 'grey',
                margin: 'auto'
              }}
            ></div>
            <Typography variant='subtitle1' sx={{paddingInline:'2rem', fontWeight: 'bold', mt: 1}}><Link underline="none" color="inherit" href="#">DICARI TENAGA PENDIDIK YANG SIAP MENGISI DI SD ISLAM AL-MUHAJIRIN</Link></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Announcement