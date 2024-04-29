import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";


const Boximage = styled(Box)({
  textAlign: "center",
  marginTop: ".5rem",
  backgroundColor:"white",
  // display:"flex",
  // justifyContent:"center",
  // alignItems:"center"
  padding:"1rem 0"
});

const url =
  "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/fb2046d209f47d12.jpeg?q=20";
const AdSlide = ({ products, timer, title }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <Box>
          <Slide products={products} title={title} timer={timer} />
        </Box>
      </Grid>

      <Grid item xs={2}>
        <Boximage>
          <img
            src={url}
            alt="image"
            style={{ height: "auto", width: "100%" }}
          />
        </Boximage>
      </Grid>
    </Grid>
  );
};

export default AdSlide;
