import { forwardRef } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import s from './ProductsList.module.css'
import Button from "../../UI/Button"
import ProductsItem from "../ProductsItem/ProductsItem"


const ProductsList = forwardRef((props, ref) => {

    const {button, title} = props
    const {productList} = useSelector((store) => store.productList)
    const filteredProductList = productList.filter(elem => elem.isShowSale && elem.isShowPrice)

    return(
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.header_navigation}>
                <div>
                    {(title) ?
                    <div>
                        <h2 className={s.header_text}>Sale</h2>
                    </div> : null}
                </div>
            <div>
                {(button) ? 
                    <div>
                        <Link to={'/products/sales'} ref={ref}> 
                            <Button title='All sales' theme='navigation'/>
                        </Link> 
                    </div>
                    : null}
                </div>
            </div>
        </div>
        
        <div className={s.product_cards_list}>
                {filteredProductList.map(elem => 
                    <ProductsItem 
                            key={elem.id} 
                            id={elem.id}
                            title={elem.title}
                            image={elem.image}
                            price={elem.price}
                            discont_price={elem.discont_price}
                    />)}
            </div>
        </div>
    )})

export default ProductsList