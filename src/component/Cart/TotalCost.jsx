import React from 'react';
import { Typography, Box, styled, Divider } from '@mui/material';
const BoxStyled = styled(Box)({
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  borderRadius: "5px",
  backgroundColor: "white",
  marginLeft: ".5rem"
});
const BoxCommom = styled(Box)({
  // marginLeft: ".5rem",
  padding:"0 1rem"
});
const TypoHeading = styled(Typography)({
  padding: ".8rem 0"
});

const PriceInfo = ({ label, value }) => (
  <Typography>
    <Box component="span" style={{ display: 'flex', justifyContent: 'space-between',padding:".3rem 0" }}>
      <span>{label}</span>
      <span style={{ textAlign: 'right' }}>&#8377;{value}</span>
    </Box>
  </Typography>
);
const BoldLabel = styled('span')({
  fontWeight: 'bold',
});
const TypoTotal= styled(Typography)({
  display:"flex",
  justifyContent:"space-between",
  padding:"1rem 0",
  fontWeight: 'bold',
})
const TotalCost = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price.cost, 0);
  const mrp = cartItems.reduce((total, item) => total + item.price.mrp, 0);
  const discount = mrp - totalPrice;
  const deliveryCharge = totalPrice < 500 ? 100 : 0;
  const TotalAmount= deliveryCharge+totalPrice

  return (
    <>
      <BoxStyled>
        <BoxCommom>
          <TypoHeading>PRICE DETAILS</TypoHeading>
        </BoxCommom>
        <Divider />
        <BoxCommom>
          <PriceInfo label={`Price (${cartItems.length} item)`} value={totalPrice} />
          <PriceInfo label={`Discount (${cartItems.length} item)`} value={discount} />
          <PriceInfo label={`Delivery Charge (${cartItems.length} item)`} value={deliveryCharge} />
          <Divider />
          <TypoTotal>
            <BoldLabel>Total Amount</BoldLabel>
            <Box component="span" style={{textAlign:"right"}}>
              {TotalAmount}
            </Box>
          </TypoTotal>
          <Divider />
          <TypoHeading>
            You Will Save On this Order &nbsp;
            <Box component="span">&#8377;{discount}</Box>
          </TypoHeading>
        </BoxCommom>
      </BoxStyled>
    </>
  );
};

export default TotalCost;
