import { Link } from 'react-router-dom'
import Button from '../../UI/Button'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import Basket from '../../components/Basket/Basket'
import s from './BasketPage.module.css'
import { useSelector } from 'react-redux'

function BasketPage() {
  const { items, count } = useSelector((store) => store.basket)

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.header_text}>Shopping Cart</h1>
        <div className={s.header_navigation}>
          <Link to={'/products/all'}>
            <Button title="Back to the store" theme="navigation" />
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.basket}>
          {items.length === 0 ? (
            <div className={s.empty_cart}>
              <p className={s.message_text}>
                Looks like you have no items in your basket currently.
              </p>
              <Link to={'/products/all'}>
                <Button title="Continue Shopping" theme="green" />
              </Link>
            </div>
          ) : (
            <Basket />
          )}
        </div>
        {items.length > 0 && (
          <div className={s.order_details}>
            <OrderDetails
              orderItems={items.length}
              orderSum={Math.round(
                items.reduce((sum, item) => sum + item.count * (item.discont_price || item.price), 0) * 100
              ) / 100}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default BasketPage
