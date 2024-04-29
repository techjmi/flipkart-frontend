import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/action/ProductAction'
import { AppBar, Box, Grid, InputBase, Toolbar, Typography, alpha, styled } from '@mui/material';
import DetailImage from './DetailImage';
import ProductDetail from './ProductDetail';
const BoxDetail= styled(Box)({
  backgroundColor:"#F2F2F2",
  marginTop:"1rem"
})
const GridStyle= styled(Grid)({
  // background:"#FFFFFF"
  background:"#FFFFFF",
  display:"flex"
})
const RightContainer = styled(Grid)`
    margin-top: 20px;
   
    & > p {
        margin-top: 10px;
    }
`;
const DetailsView = () => {
    const disptach= useDispatch()
    const{id}= useParams()
    const{loading, product}=useSelector(state=>state.getProductDetails)
    useEffect(()=>{
      if(product && id!== product.id)
        disptach(getProductDetails(id))
    }, [disptach, id, product, loading])
    console.log(product)
    return (
      <BoxDetail>
        {product && Object.keys(product).length &&
          <GridStyle container  spacing={4}>
            <Grid item lg={4} md={4}sm={8}xs={12}>
            <DetailImage product={product}/>
              
            </Grid>
            <RightContainer item lg={8} md={8}sm={4}xs={12}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            {/* <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span> */}
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
           <ProductDetail product={product}/>
            </RightContainer>
          </GridStyle>
        }
      </BoxDetail>
    );
    
    
}

export default DetailsView
