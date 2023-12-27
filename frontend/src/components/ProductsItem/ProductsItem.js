import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import s from './ProductsItem.module.css'
import { addNEwItemAction } from "../../store/BasketReducer"
import Button from "../../UI/Button"
import { base_url } from "../.."


function ProductsItem(props){

    const {id, title, image, price, discont_price} = props

    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    
    function addToCart(event){
        event.preventDefault()
        dispatch(addNEwItemAction({...props, count: 1}))
    }

    return (
        <Link to={`/products/${id}`}>
            <div className={s.product_card}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}>  

            <div style={{backgroundImage: `url(${base_url + image})`}} className={s.product_image}>
                    {discont_price !== null && (
                        <div className={s.discount_tag}>
                            {Math.round((1 - discont_price / price) * 100)}%
                        </div>)}
                        <div className={s.overlay}>
                        {active && ( 
                        <Button
                            title="Add to cart"
                            theme="hover_but"
                            onClick={(e) => addToCart(e)}
                        />)}
                </div>
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


