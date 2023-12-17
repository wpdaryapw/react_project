import { base_url } from ".."
import { productInfoAction } from "../store/ProductInfoReducer"

export function fetchProductInfo(id){
    return function(dispatch){
        fetch(base_url+ '/products/'+id)
        .then(res => res.json())
        .then(data => dispatch(productInfoAction(data)))
    }
}