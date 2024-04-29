
import { AppBar, Badge, Box, InputBase, List, ListItem, Toolbar, Typography, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import React, { useEffect, useState } from 'react';
import Login from './account/Login';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getProducts from '../redux/action/ProductAction';

const AppBarStyled = styled(AppBar)({
  // backgroundColor: "#fff",
  backgroundColor:"blue",
  height:"60px",
  margin:"auto"

 
});
const ToolbarStyle= styled(Toolbar)({
    display:"flex",
    margin:"0 2rem",
    justifyContent:"space-between"
})
const Boxlogo= styled(Box)({
    lineHeight:"0"
})
const SubLogo= styled(Typography)({
    fontStyle:"italic"
})

const BoxCart= styled(Box)({
    display:"flex",
    gap:".3rem",
    cursor:"pointer"
    
})
const Boxseller= styled(Box)({
    display:"flex",
    gap:".3rem"
})
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
const BoxLogin= styled(Box)({
  display:"flex",
  gap:"1.5rem",
  justifyContent:"center",
  alignItems:"center"
})
const ListWrapper= styled(List)({
  position:"absolute",
  backgroundColor:"#FEEBEB",
  // color:"#000",
  color:"#333333",
  marginTop:"2rem",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
})
const Header = () => {
 const [text, setText] = useState("")
 const getText= (text)=>{
  setText(text)
 }
 console.log('Current Text:', text);
 const productsData = useSelector(state => state.getProducts.products);
console.log('Products from Redux:', productsData);
 const dispatch= useDispatch()
 useEffect(()=>{
  dispatch(getProducts())
 }, [dispatch])
 const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
  return (
    <>
      <AppBarStyled>
        <ToolbarStyle>
            {/* logo */}
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
       <Boxlogo>
        <img src='/LogoFlip21.jpg' alt='shamim' style={{height:"40x", width:"100px"}}/>
        <Box>
        <SubLogo>
  Explore <span className='spn' style={{ color: 'yellow' }}>Plus</span>
</SubLogo>

        </Box>
       </Boxlogo>
       </Link>
       {/* searchBox */}
       <Box>
       <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products brand and more...." 
              onChange={(e)=>getText(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
              value={text}
            />
          </Search>
          {Array.isArray(productsData) && text && (
  <ListWrapper>
    {productsData
      .filter(product => {
        const includesText = product.title.longTitle.toLowerCase().includes(text.toLowerCase());
        return includesText;
      })
      .map(product => (

        <ListItem key={product.id}>
        <Link to={`/product/${product.id}`} style={{textDecoration:"none"}} onClick={()=>setText("")}>
          {product.title.longTitle}
        </Link>
      </ListItem>
      
      ))}
  </ListWrapper>
)}

       </Box>
      
          {/* login */}
          <BoxLogin>
          <Login />
          {/* box cart */}
          <BoxCart>
            <Box>
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartOutlinedIcon />
            </Badge>
            </Box>
           <Link to="/cart" style={{textDecoration:"none", color:"white"}} >
           <Typography>Cart</Typography>
           </Link>
           
          </BoxCart>
          {/* box seller */}
          <Boxseller>
            <Box>
            <BusinessCenterOutlinedIcon />
            </Box>
<Box>
    <Typography>Become a Seller</Typography>
</Box>
          </Boxseller>
          </BoxLogin>
        
        </ToolbarStyle>
      </AppBarStyled>
    </>
  );
};

export default Header;
