import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchProductInfo } from "../../asyncActions/productInfo"
import { base_url } from "../.."
import Button from "../../UI/Button"
import s from './ProductInfoPage.module.css'

function ProductInfoPage(){

    const productInfo = useSelector((store) => store.productInfo)
    const dispatch = useDispatch()
    const {id} = useParams()


    useEffect(() => {
        dispatch(fetchProductInfo(id))
    }, [id])

    return(
        <div>
            <div className={s.product_card}>
                <div className={s.product_card_image}>
                    {productInfo.discont_price !== null && (
                    <div className={s.discount_tag}>
                        {Math.round((1 - productInfo.discont_price / productInfo.price) * 100)}%
                </div>)}
            </div>
        </div>
              
        <div>
            <h1>{productInfo.title}</h1>
                <img src={base_url+ productInfo.image}/>
                {productInfo.discont_price ? (<div>
                    <h3>${productInfo.discont_price}</h3> 
                    <h3>${productInfo.price}</h3> </div>) 
                    : 
                (<div><h3>${productInfo.price}</h3></div>)}

                <p>{productInfo.description}</p>

                <Button title='Add to cart' theme='cart'/>
            </div>
            
        </div>
    )}

export default ProductInfoPage