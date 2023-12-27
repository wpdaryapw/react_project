import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './ProductListReducer'
import { categoriesCardsReducer } from './CategoriesCardsReducer'
import { productInfoReducer } from './ProductInfoReducer'
import { cartReducer } from './BasketReducer'



const rootReducer = combineReducers({
    productList: productListReducer,
    categoriesCards: categoriesCardsReducer,
    productInfo: productInfoReducer,
    basket: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))