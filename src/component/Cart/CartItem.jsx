import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ButtonGroup from './ButtonGroup';
import { RemovefromCart } from '../../redux/action/cartAction';
import { useDispatch } from 'react-redux';
const BoxItem= styled(Box)({
    // backgroundColor:"white",
    margin:"1rem 1rem",
    display:"flex",
    gap:"1rem",
})
const BoxImg= styled(Box)({
    display:"flex",
    flexDirection:"column",
    textAlign:"center",
    
    gap:".5rem",
    alignItems:"center"
})


const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;
const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const removeItem= (id)=>{
        dispatch(RemovefromCart(id))
    }
  return (
    <>
    <BoxItem>
        <BoxImg>
<img src={item.url} alt='product' style={{width:"110px", height:"auto"}}/>
<ButtonGroup />
        </BoxImg>
        

<Box style={{ margin: 20 }}>
                <Typography>{item.title.longTitle}</Typography>
                <SmallText>Seller:RetailNet
                 
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={()=>removeItem(item.id)}>Remove</Remove>
            </Box>
        
    </BoxItem>
    </>
  )
}

export default CartItem
