import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	catListReducer,
	catProductListReducer,
} from './reducers/categoryReducer';
import {
	productCreateReducer,
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducer';
const reducer = combineReducers({
	catList: catListReducer,
	productCreate: productCreateReducer,
	productList: productListReducer,
	catProductList: catProductListReducer,
	productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk];
// create store
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
