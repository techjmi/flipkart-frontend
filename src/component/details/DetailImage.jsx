import { Box, Button, styled } from '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';
import { PaymentByPaytm } from '../../service/api';
const BoxImage=styled(Box)({
    minWidth: '40%',
    // margin:"1.5rem 0 0 .7rem"
    padding: '30px 0 0 30px',
})
const Image= styled("img")({
    backgroundColor:"white",
    // border:"2px solid gray",
    // padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
})
const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    // height: 50px;
    color: #FFF;
    margin-top:1rem;
    
`;
const DetailImage = ({product}) => {
  const navigate= useNavigate()
  const disptach= useDispatch()
  const [quantity, setQuantity] = useState(1)
const buyNow=()=>{
  const response= PaymentByPaytm({amount:500, email:"shamim@gmail.com"})
  let information={
    action:"https://securegw-stage.paytm.in/order/process",
    params:"response"
  }
  // post(information)
}

  console.log("the id from cart is " ,product.id)
  console.log(product.detailUrl)
  const addItem=()=>{
navigate("/cart")
disptach(addToCart(product.id, quantity))
  }
  return (
    <BoxImage>
    <Image src={product.detailUrl} alt='detail' />
    <StyledButton variant='contained' style={{marginRight: 10, background: '#ff9f00'}}onClick={addItem}><Cart />Add to Cart</StyledButton>
    <StyledButton variant='contained' style={{background: '#fb641b'}} onClick={buyNow}><Flash /> Buy Now</StyledButton>
    </BoxImage>
  )
}

export default DetailImage
