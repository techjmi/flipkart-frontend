import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
import {thunk} from 'redux-thunk';
import { getDetailReducer, getsProductsreducer } from './reducer/reducer';
import { cartReducer } from './reducer/cartReducer';

const reducer = combineReducers({
    getProducts: getsProductsreducer,
    getProductDetails:getDetailReducer,
    cart:cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
        // other store enhancers if any
    )
);

export default store;

