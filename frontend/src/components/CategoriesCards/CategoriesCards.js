import { useDispatch, useSelector } from "react-redux"
import { store } from "../../store"
import { useEffect } from "react"
import { fetchAllCategoriesCards } from "../../asyncActions/categoriesCards"
import { base_url } from "../.."
import s from './CategoriesCards.module.css'
import Button from "../../UI/Button"
import { Link, useNavigate } from "react-router-dom"
import { fetchCategoryById } from "../../asyncActions/ProductList"
import CategoriesItem from "../CategoriesItem/CategoriesItem"


function CategoriesCards({items, button, type}){
    

    const categoriesCards = useSelector((store) => store.categoriesCards)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(fetchAllCategoriesCards())
    }, [])


    const handleCategoryClick = (id) => {
        dispatch(fetchCategoryById(id))
        navigate(`/category/${id}`)
    }

    return(
        <div className={s.main}>
            <div className={s.header}>
                <h2 className={s.header_text}>Categories</h2>

                <div className={s.header_navigation}>
                {(button) ? 
                        <Link to={'/categories/all'}> 
                            <Button title='All categories' theme='navigation'/>
                        </Link> : null}
                </div>
            </div>

            <div className={type}>
            {categoriesCards.slice(0, items ?? categoriesCards.length).map(elem =>
                <div onClick={() => handleCategoryClick(elem.id)}>
                        <CategoriesItem
                                id={elem.id}
                                image={base_url + elem.image}
                                title={elem.title}/>         
                </div>)}
         </div>
        </div>
    )
}

export default CategoriesCards