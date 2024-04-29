
import * as actionTypes from "../constant/cartConstant";

const URL = "https://flipkart-backend-9spf.onrender.com/api";


export const addToCart=(id, quantity)=>async(dispatch)=>{
try {
  
    const response= await fetch (`${URL}/product/${id}`,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          } ,
    })
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data= await response.json()
    // console.log("The data from add to cart is", data)
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {...data, quantity}
      });
} catch (error) {
    console.log("The Error In Adding to cart is", error.message)
    dispatch({
        type: actionTypes.ADD_TO_CART_FAIL,
        payload: error.message
      });
      throw error
}
}

export const RemovefromCart= (id)=>(dispatch)=>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
      });
}