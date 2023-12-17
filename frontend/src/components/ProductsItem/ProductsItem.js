import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { fetchAllProducts } from "../../asyncActions/ProductList"
import s from './ProductsItem.module.css'
import HoverButton from "../HoverButton/HoverButton"




function ProductsItem({id, title, image, price, discont_price}){

    const [active, setActive] = useState(false)

    return (
        <Link to={`/products/${id}`}>
            <div className={s.product_card}>  
                <div className={s.product_card_image}>
                    {discont_price !== null && (
                        <div className={s.discount_tag}>
                            {Math.round((1 - discont_price / price) * 100)}%
                        </div>)}

        <img width={'200px'} src={image}/>

        <p>{title}</p>

        {discont_price ? (<div>
                            <h3>${discont_price}</h3> 
                            <h3>${price}</h3>
                        </div>) 
                : 
                        (<div><h3>${price}</h3></div>)}
                    </div>
            </div>
        </Link>
  )
}

export default ProductsItem


