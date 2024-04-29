// import styled from '@emotion/styled';
import { Box, styled } from '@mui/material';
import React from 'react';


const url = "https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/d56a3ed6d200038a.jpg?q=20";
const BoxStyle= styled(Box)({
    backgroundColor:"white",
    margin:"1rem auto"
})

const CardOffer = () => {
  return (
    <>
      <BoxStyle>
        <img src={url} alt='card' style={{width:"100%" ,height:"auto"}}/>
      </BoxStyle>
    </>
  );
}

export default CardOffer;
