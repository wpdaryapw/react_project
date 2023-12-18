import { forwardRef } from "react"
import { useSelector } from "react-redux"
import { base_url } from "../.."
import { Link } from "react-router-dom"
import s from './ProductsList.module.css'
import Button from "../../UI/Button"
import ProductsItem from "../ProductsItem/ProductsItem"


const ProductsList = forwardRef((props, ref) => {

    const {button} = props
    const {category_name, productList} = useSelector((store) => store.productList)

    return(
        <div className={s.wrapper}>
            <div className={s.header}>
                <h2 ref={ref} className={s.header_text}>{category_name}</h2>
                
            <div>
                {(button) ? 
                    <div>
                        <Link to={'/products/sales'}> 
                            <Button title='All sales' theme='navigation'/>
                        </Link> 
                    </div>
                    : null}
            </div>
        </div>
        <div className={s.product_cards_list}>
                {productList.map(elem => 
                    <ProductsItem 
                            key={elem.id} 
                            id={elem.id}
                            title={elem.title}
                            image={base_url + elem.image}
                            price={elem.price}
                            discont_price={elem.discont_price}
                    />)}
            </div>
        </div>
    )})

export default ProductsList