import { Box, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constant/Data'
import styled from '@emotion/styled'
const BoxNav= styled(Box)({
    display:"flex",
    backgroundColor:"navajowhite",
    textAlign:"center"
// gap:".5rem",
// margin:" 0 auto",
})
const BoxMap= styled(Box)({
    margin:" .5rem auto 0 auto",
    // gap:"5rem",
    // backgroundColor:"navajowhite"
})
const Text= styled(Typography)({
    fontWeight:"bold"
})
const Navbar = () => {
  return (
    <>
      <BoxNav>
        {navData.map((data) => (
          <BoxMap key={data.id}> 
            <img src={data.url} alt='img'  style={{width:"64px"}}/>
            <Text>{data.text}</Text>
          </BoxMap>
        ))}
      </BoxNav>
    </>
  )
}

export default Navbar
