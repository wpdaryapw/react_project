import { useDispatch, useSelector } from "react-redux"
import ProductsList from "../../components/ProductsList/ProductsList"
import { useLocation, useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchAllProducts, fetchCategoryById } from "../../asyncActions/ProductList"
import s from './ProductListPage.module.css'
import Filter from "../../components/Filter/Filter"


function ProductListPage({type}){

    const {category_name, productList} = useSelector((store) => store.productList)
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
            <h2 className={s.header_text}>{category_name}</h2>
            <Filter/>
            <ProductsList/>
        </div>
    )
}

export default ProductListPage