import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchProductInfo } from "../../asyncActions/productInfo"
import { base_url } from "../.."
import Button from "../../UI/Button"
import s from './ProductInfoPage.module.css'
import { addNEwItemAction } from "../../store/BasketReducer"
import Counter from "../../components/Counter/Counter"

function ProductInfoPage(){

    const productInfo = useSelector((store) => store.productInfo)
    const dispatch = useDispatch()
    const {id} = useParams()

    function addToCart(event){
        event.preventDefault()
        dispatch(addNEwItemAction({...productInfo, count: 1}))
    }


    useEffect(() => {
        dispatch(fetchProductInfo(id))
    }, [id])
    console.log(productInfo)
    

    return (
        <div className={s.wrapper}>
          <div className={s.image_container} style={{backgroundImage: `url(${base_url+productInfo.image})`}}></div>
          <div className={s.product_info}>
            <h1 className={s.product_title}>{productInfo.title}</h1>
            <div className={s.product_price_info}>
              <div className={s.product_price_section}>
                {productInfo.discont_price ? (
                  <div className={s.product_card_price_field}>
                    <h3 className={s.product_card_price_field_price}>${productInfo.discont_price}</h3> 
                    <h3 className={s.product_card_price_field_initial_price}>${productInfo.price}</h3>
                  </div>
                ) : (
                  <div><h3 className={s.product_card_price_field_price}>${productInfo.price}</h3></div>
                )}
                {productInfo.discont_price !== null && (
                  <div className={s.discount_tag}>
                    {Math.round((1 - productInfo.discont_price / productInfo.price) * 100)}%
                  </div>
                )}
              </div>
              <div className={s.product_card_price_field}>
                <Counter itemId={productInfo.id} />
                <Button title='Add to cart' theme='cart' onClick={(e) => addToCart(e)}/>
              </div>
            </div>
            <h2 className={s.description_title}>Description</h2>
            <p className={s.product_description}>{productInfo.description}</p>
            <Link className={s.link}>Read more</Link>
          </div>
        </div>
      )}

export default ProductInfoPage