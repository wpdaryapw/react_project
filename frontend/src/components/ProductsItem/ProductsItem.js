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
            <div className={s.product_card}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}>  

            <div style={{backgroundImage: `url(${image})`}} className={s.product_image}>
                    {discont_price !== null && (
                        <div className={s.discount_tag}>
                            {Math.round((1 - discont_price / price) * 100)}%
                        </div>)}
                    <HoverButton active={active} setActive={setActive}/>
            </div>

            <div className={s.product_card_description}>
            <div className={s.product_card_title}>{title}</div>
     
                    {discont_price ? (<div className={s.product_card_price_field}>
                                        <h3 className={s.product_card_price_field_price}>${discont_price}</h3> 
                                        <h3 className={s.product_card_price_field_initial_price}>${price}</h3>
                                    </div>) 
                                    : 
                                    (<div><h3 >${price}</h3></div>)}
                    </div>
            </div>
        </Link>
  )}

export default ProductsItem


