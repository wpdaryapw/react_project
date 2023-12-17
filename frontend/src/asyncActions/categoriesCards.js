import { base_url } from ".."
import { categoriesCardsAction } from "../store/CategoriesCardsReducer"

export function fetchAllCategoriesCards(){
    return function(dispatch){
        fetch(base_url+'/categories/all')
        .then(res => res.json())
        .then(data => dispatch(categoriesCardsAction(data)))
    }
}