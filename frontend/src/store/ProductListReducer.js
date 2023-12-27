const defaultState = {
    category_name: '',
    productList: []
}


const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_SALES = 'ALL_SALES'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const TOP_SALE_PRODUCTS = 'TOP_SALE_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'
const SORT_BY_PRICE_ASCENDING = 'SORT_BY_PRICE_ASCENDING'
const SORT_BY_NAME = 'SORT_BY_NAME'
const DEFAULT_SORT = 'DEFAULT_SORT'

function addShowProp(array){
    return array.map((elem) => {
            elem.isShowSale = true
            elem.isShowPrice = true
            return elem
          })}
          
export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {category_name: 'All products', productList : addShowProp(action.payload)}
        case ALL_SALES:
            const all_sales_products = action.payload.filter(elem => elem.discont_price)
            return {category_name: 'Discounted items', productList : addShowProp(all_sales_products)}
        case PRODUCTS_BY_CATEGORY:
            return {category_name: action.payload.category.title, productList: addShowProp(action.payload.data)}
        case TOP_SALE_PRODUCTS:
            const top_sale = action.payload.sort((a, b) => b.discont_price - a.discont_price).slice(0, 4)
            return {category_name: 'Sale', productList: addShowProp(top_sale)}
        case FILTER_BY_SALE:
            return {
                ...state,
                productList: state.productList.map((elem) => {
                  if (action.payload) {
                    elem.isShowSale = elem.discont_price ? true : false
                  } else {
                    elem.isShowSale = true
                  }
                  return elem
                })}
        case FILTER_BY_PRICE:
            const { max, min } = action.payload
            return {
                ...state,
                productList: state.productList.map((elem) => {
                elem.isShowPrice = !(elem.price >= min && elem.price <= max) ? false : true
                return elem
        })}
        case SORT_BY_PRICE_ASCENDING:
            const sortedByPrice = state.productList.slice().sort((a, b) => a.price - b.price)
            return {...state, productList: sortedByPrice}
        case SORT_BY_NAME:
            const sortedByName = [...state.productList].sort((a, b) => a.title[0] < b.title[0] ? -1 : 1)
            return { ...state, productList: sortedByName }
        case DEFAULT_SORT:
            const sortedDefault = state.productList.slice().sort((a, b) => a.id - b.id)
            return { ...state, productList: sortedDefault }
        default: 
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const allSalesAction = (payload) => ({type: ALL_SALES, payload})
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})
export const topSaleAction = (payload) => ({type: TOP_SALE_PRODUCTS, payload})
export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})
export const sortByPriceAscendingAction = () => ({type: SORT_BY_PRICE_ASCENDING})
export const sortBynameAction = () => ({type: SORT_BY_NAME})
export const defaultSortAction = () => ({type: DEFAULT_SORT})
