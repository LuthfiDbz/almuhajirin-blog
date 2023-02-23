import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#0000FF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
}));

export default function AboveHeader() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Daftar PPDB? Klik tombolnya yah! <Button variant="outlined" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe1yO0wx84So3aAi3FaoA1pnuepE-J878UPqNj6NfEfl9CSvA/viewform")}>DAFTAR</Button></Item>
        </Grid>
      </Grid>
    </Box>
  );
}