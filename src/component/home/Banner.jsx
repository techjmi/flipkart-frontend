import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constant/Data";
import styled from "@emotion/styled";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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
const Image = styled('img')({
  width: '100%',
  height: 280,
  objectFit:"cover"
})
 
  

const Banner = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
  draggable={false}
  infinite={true}
  autoPlay={true}  // Enable automatic sliding
  autoPlaySpeed={3000} 
      >
        {bannerData.map((data) => (
          <Image key={data.id} src={data.url} alt="banner"/>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
