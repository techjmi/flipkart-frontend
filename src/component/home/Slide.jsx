import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Link } from "react-router-dom";
const BoxStyle = styled(Box)({
  // backgroundColor:"#FFFFFF",
  backgroundColor: "white",
  marginTop: ".5rem",
  // display:"flex"
});
const Deal = styled(Box)({
  padding: "1rem 1.3rem",
  display: "flex",
});
const Timer = styled(Box)({
  display: "flex",
  marginLeft: "1.8rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  gap: ".3rem",
});
const Dealtext = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "600",
});
const ButtonDeal= styled(Button)({
    marginLeft:"auto",
    borderRadius:"2px",
    fontSize:"11px",
    fontWeight:"600"
})
//crousel
const Image= styled("img")({
    width:"auto",
    height:150
})
const ProductText= styled(Typography)({
    // fontSize:"14px",
    marginTop:".2rem"
})
const BoxCard= styled(Box)({
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
    gap:".2rem",
    // display:"flex"
    marginRight:".7rem",
    marginTop:".5rem",
    // marginBottom:".5rem"
})

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title , timer, ad}) => {
  const renderer = ({ hours, minutes, seconds }) => {
    // <Box><span>{hours}:{minutes}:{seconds}</span></Box>
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds}: Left
      </Box>
    );
  };
  const url="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/fb2046d209f47d12.jpeg?q=20"

  return (
    <BoxStyle>
    
      <Deal>
        <Dealtext>{title}</Dealtext>
        {timer && <Timer>
          <AlarmIcon color="primary" />
          <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        </Timer>}
        
        <ButtonDeal variant="contained" color="primary">VIEW ALL</ButtonDeal>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        //   containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true} // Enable automatic sliding
        autoPlaySpeed={3000}
        //
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{textDecoration:"none"}}>
            <BoxCard textAlign="center" style={{padding:"1rem .2rem"}}>
<Image key={product.id} src={product.url} alt="productImage" />
<ProductText style={{fontWeight:600, color:"#212121"}}>{product.title.shortTitle}</ProductText>
<ProductText style={{color:"green"}}>{product.price.discount}</ProductText>
<ProductText>{product.tagline}</ProductText>
            </BoxCard>
            </Link>
        ))}
      </Carousel>
    </BoxStyle>
  );
};

export default Slide;
