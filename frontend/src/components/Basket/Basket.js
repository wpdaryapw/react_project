import { useDispatch, useSelector } from "react-redux"
import { removeFromBasketAction } from "../../store/BasketReducer"
import { base_url } from "../.."
import Counter from "../Counter/Counter"
import s from './Basket.module.css'
import { ReactComponent as Item} from '../../images/krestik.svg'
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Basket(){
    const dispatch = useDispatch()
    const {items, count} = useSelector((store) => store.basket)

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return(
        <div>
            <div>
                {items.map(elem => 
                    <div className={s.wrapper} key={elem.id}>
                        <Link to={`/products/${elem.id}`} className={s.image_wrapper}>
                            <div className={s.product_image} style={{backgroundImage: `url(${base_url + elem.image})`}}></div>
                        </Link>

                    <div className={s.product_info}>
                        <p className={s.product_title}>{elem.title}</p>
                            <Counter itemId={elem.id}/>
                            <Item onClick={() => dispatch(removeFromBasketAction(elem))} className={s.close_button}/>
                    </div>

                    <div className={s.product_price_info}>
                        <div className={s.product_price_section}>
                            {elem.discont_price ? (
                        <div className={s.product_card_price_field}>
                            <h3 className={s.product_card_price_field_price}>${elem.discont_price}</h3> 
                            <h3 className={s.product_card_price_field_initial_price}>${elem.price}</h3>
                        </div>
                        ) : (
                        <div><h3 className={s.product_card_price_field_price}>${elem.price}</h3></div>
                        )}
                      </div> 
                    </div>
                  </div>
                )}
            </div>
        </div>
    )
}

export default Basket
