import { useDispatch, useSelector } from "react-redux"
import { changeCountAction } from "../../store/BasketReducer"
import s from './Counter.module.css'

function Counter({itemId}) {
  const dispatch = useDispatch()
  const {items} = useSelector((store) => store.basket)

  const item = items.find((elem) => elem.id === itemId)
  if (!item) {
    return null
  }

  const countAction = (count) =>
    dispatch(changeCountAction({id: itemId, count}))

  return (
    <div className={s.price_counter_area}>
        <div className={s.counter}>
            <button className={s.less_button} onClick={() => countAction(-1)}>-</button>
                <div className={s.counter_value}>{item.count}</div>
            <button className={s.more_button} onClick={() => countAction(1)}>+</button>
        </div>
    </div>
  )
}

export default Counter
