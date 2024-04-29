import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { AdData, BranData } from '../../constant/Data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const BoxStyle= styled(Box)({
    backgroundColor:"white",
    paddingTop:"1rem",
    // paddingBottom:"1rem",
    marginTop:"1rem",
    marginBottom:"1.5rem"
    // boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
})
const TypoBrand= styled(Typography)({
    fontSize:"1.5rem",
    fontWeight:600,
    padding:"1rem 1rem"
})
const BrandBanner = () => {
  return (
    <BoxStyle>
         <TypoBrand>Featured Brands</TypoBrand>
  <Grid container spacing={2}>
      {BranData.map((data) => (
       
        <Grid item xs={12} md={4} key={data.id}>
           
          <Item>
            <img src={data.url} alt='image'style={{ maxWidth: '100%', height: 'auto' }} />
          </Item>
        </Grid>
      ))}
    </Grid>
    </BoxStyle>
  
  );
};

export default BrandBanner;
