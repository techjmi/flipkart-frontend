import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Home from './component/home/Home';
import { Dataprovider } from './context/DataProvider';
import DetailsView from './component/details/DetailsView';
import Cart from './component/Cart/Cart';
// import Cart from './component/Cart/Cart';
// import Cart from './component/cart/Cart';
function App() {
  return (
   <Dataprovider>
    <BrowserRouter>
   <Header />
   <Box style={{marginTop:"60px"}}>
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/product/:id' element={<DetailsView />} />
   <Route path='/cart' element={<Cart />} />
   </Routes>
   </Box>
   </BrowserRouter>
   </Dataprovider>
  );
}

export default App;
