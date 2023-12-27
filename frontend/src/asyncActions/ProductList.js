import { base_url } from "..";
import { addProductAction, allProductsAction, allSalesAction, productsByCategoryAction, topSaleAction } from "../store/ProductListReducer";


export function fetchAllProducts(arg){
    return function(dispatch){
        fetch(base_url+'/products/all')
            .then(res => res.json())
            .then(data => {
                if (arg === 'all'){
                    dispatch(allProductsAction(data))
                } else if (arg === 'sales'){
                    dispatch(allSalesAction(data))
                }
            })
    }
}

export function fetchCategoryById(id){
    return function(dispatch){
        fetch(base_url+'/categories/'+id)
        .then(res => res.json())
        .then(data => dispatch(productsByCategoryAction(data)))
}
}


export function fetchTopSale() {
    return function(dispatch) {
      fetch(base_url + '/products/all')
        .then(res => res.json())
          .then(data => dispatch(topSaleAction(data)))
    }
}

export function fetchAddProducts(){
    return function(dispatch){
        fetch(base_url+'/products/all')
            .then(res => res.json())
            .then(data => dispatch(addProductAction(data)))
    }
}
