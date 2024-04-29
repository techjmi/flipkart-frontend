import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalCost from "./TotalCost";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";
const Component = styled(Grid)({
  padding: "1.5rem 5rem",
  display: "flex",
  // backgroundColor:"navajowhite"
});
const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;
const GridLeft = styled(Grid)({
  display: "flex",
  flexDirection: "column",
});
const BoxPlaced = styled(Box)({
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  // backgroundColor:"navajowhite",
  borderRadius: "5px",
  backgroundColor: "white",
});
const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
  positon: fixed;
`;
const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log("the cart items is", cartItems)
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <GridLeft item lg={9} md={9} xs={12} sm={12}>
            <Header>My Cart ({cartItems.length})</Header>

            <Divider />
            <BoxPlaced>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </BoxPlaced>

            <BottomWrapper>
              <StyledButton>Place Order</StyledButton>
            </BottomWrapper>
          </GridLeft>

          <Grid item lg={3} md={3} xs={12} sm={12}>
            <TotalCost cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
