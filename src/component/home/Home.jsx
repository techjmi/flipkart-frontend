import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
import getProducts from '../../redux/action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import SubBanner from './SubBanner'
import BrandBanner from './BrandBanner'
import CardOffer from './CardOffer'
import AdSlide from './AdSlide'


// import styled from '@emotion/styled'
const BoxHome = styled(Box)({
    padding:"0.5rem 1rem",
    backgroundColor:"#F2F2F2"
})
const Home = () => {
  const{products}=useSelector(state=>state.getProducts)
  console.log('data from home is ' ,products)
  const topDeals= products.slice(0,7)
  // console.log('topDeals from home is ' , topDeals)
  const womenFashion= products.slice(8,15)
  // console.log('womenfashion from home is ' , topDeals)
  const ElectronicsDeals= products.slice(16,22)
  const Menswear= products.slice(23,29)
  const dispatch= useDispatch()
  useEffect(()=>{
dispatch(getProducts())
  },[dispatch])
  return (
    <>
     <Navbar />
     <BoxHome>
     <Banner />
     <CardOffer />
     <AdSlide products={topDeals}title="Top Deal" timer={true} />
     <SubBanner />
     <Slide products={womenFashion} title="Women Fashion" timer={false}/>
     <SubBanner />
     <BrandBanner />
     <SubBanner />
     <Slide products={ElectronicsDeals} title="Top Deals On Electronics" timer={false}/>
     <Slide products={Menswear} title="Men's Wear" timer={false}/>
     </BoxHome>
  
    </>
   
  )
}

export default Home