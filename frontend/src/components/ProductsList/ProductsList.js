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
        <div>
            <h2 ref={ref}>{category_name}</h2>
            <div>
                {(button) ? 
                    <Link to={'/products/sales'}> 
                        <Button title='All sales' theme='navigation'/>
                    </Link> : null}
            </div>

        <div className="products_wrapper">
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
    )
})

export default ProductsList