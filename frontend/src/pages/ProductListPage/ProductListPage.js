import { useDispatch } from "react-redux"
import ProductsList from "../../components/ProductsList/ProductsList"
import { Link, useLocation, useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchAllProducts, fetchCategoryById } from "../../asyncActions/ProductList"
import { base_url } from "../.."


function ProductListPage({type}){

    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()

    useEffect(() => {
        if(type !== 'category'){
            dispatch(fetchAllProducts(type))
        } else {
            dispatch(fetchCategoryById(id))
        }
    }, [location.pathname])


    return(
        <div>
            <ProductsList/>
        </div>
    )
}

export default ProductListPage