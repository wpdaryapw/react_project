const defaultState = {
    category_name: '',
    productList: []
}


const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_SALES = 'ALL_SALES'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const TOP_SALE_PRODUCTS = 'TOP_SALE_PRODUCTS'


export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {category_name: 'All products', productList : action.payload}
        case ALL_SALES:
            const all_sales_products = action.payload.filter(elem => elem.discont_price)
            return {category_name: 'Discounted items', productList : all_sales_products}
        case PRODUCTS_BY_CATEGORY:
            return {category_name: action.payload.category.title, productList: action.payload.data}
        case TOP_SALE_PRODUCTS:
            const top_sale = action.payload.sort((a, b) => b.discont_price - a.discont_price).slice(0, 4)
            return {category_name: 'Sale', productList: top_sale}
        default: 
            return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const allSalesAction = (payload) => ({type: ALL_SALES, payload})
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})
export const topSaleAction = (payload) => ({type: TOP_SALE_PRODUCTS, payload})