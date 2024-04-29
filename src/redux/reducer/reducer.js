import * as actionTypes from "../constant/productConst";
export const getsProductsreducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
export const getDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAIL_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCTS_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCTS_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.GET_PRODUCTS_DETAIL_RESET:
      return { product: {} };

    default:
      return state;
  }
};
