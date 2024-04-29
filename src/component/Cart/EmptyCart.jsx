import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
const BoxEmpty = styled(Box)({
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  marginTop:"100px",
  alignItems:"center",
//   backgroundColor:"white"
});

const ImgStyled = styled('img')({
  width: "300px",
  height: "auto",
  mixBlendMode:"color-burn"
 
});
const TypoAdd= styled(Typography)({
fontSize:"12px",
marginTop:".5rem"
})
const ButtonShop= styled(Button)({
    marginTop:"1rem",
    // width:"12rem",
    padding:".5rem 4rem",
    textTransform:"none"
})
const EmptyCart = () => {
  const url = "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <>
      <BoxEmpty>
        <ImgStyled src={url} alt='emptyCart' />
        <Typography>Your Cart Is Empty!</Typography>
        <TypoAdd>Add Items To it Now</TypoAdd>
        <Link to="/">
        <ButtonShop variant='contained'>Shop Now</ButtonShop></Link>
      </BoxEmpty>
    </>
  );
};

export default EmptyCart;
