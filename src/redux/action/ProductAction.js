import * as actionTypes from "../constant/productConst";

const URL = "https://flipkart-backend-9spf.onrender.com/api";

const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data) {
      throw new Error("Data is undefined or empty");
    }
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });

    console.log("Products retrieved successfully:", data);
    return data;
  } catch (error) {
    console.error("Error during getting the products:", error.message);

    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error.message,
    });

    throw error;
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAIL_REQUEST,
     
    });
    const response = await fetch(`${URL}/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (!data) {
      throw new Error("Data is undefined or empty");
    }
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAIL_SUCCESS,
      payload: data,
    });

    console.log("Products retrieved successfully:", data);
    return data;
  } catch (error) {
    console.error("Error during getting the products:", error.message);

    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAIL_FAIL,
      payload: error.message,
    });

    throw error;
  }
};
export default getProducts;
