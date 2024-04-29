import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AdData } from '../../constant/Data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SubBanner = () => {
  return (
    <Grid container spacing={2} style={{marginTop:".8rem"}}>
      {AdData.map((data) => (
        <Grid item xs={12} md={4} key={data.id}>
          <Item>
            <img src={data.url} alt='image'style={{ maxWidth: '100%', height: 'auto' }} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubBanner;
