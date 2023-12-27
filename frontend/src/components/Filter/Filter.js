import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import s from './Filter.module.css'
import { defaultSortAction, filterByPriceAction, filterBySaleAction, sortByPriceAscendingAction, sortBynameAction } from "../../store/ProductListReducer"

function Filter(){


    const dispatch = useDispatch()
    const [sortType, setSortType] = useState()

    function checkBoxHandler(e){
        dispatch(filterBySaleAction(e.target.checked))
    }

    function formHandler(e){
        let from_data = new FormData(e.target.parentElement)
        let data = Object.fromEntries(from_data)
        data.max = (data.max && +data.max >= +data.min) ? +data.max : Infinity
        data.min = (data.min) ? +data.min : 0
        dispatch(filterByPriceAction(data))
      }

    useEffect(() => {
        switch (sortType) {
        case "name":
            dispatch(sortBynameAction())
            break
        case "price":
            dispatch(sortByPriceAscendingAction())
            break
        default:
            dispatch(defaultSortAction())
            break
        }
      }, [sortType])

      const handleSortChange = (e) => {
        const selectedSortType = e.target.value;
        setSortType(selectedSortType)
      }


    return (
    <div className={s.wrapper}>
        <div className={s.container}>
        <div className={s.labelContainer}>
            <form className={s.price_form} onChange={formHandler}>Price 
                <input type="text" name="min" placeholder="from" className={s.price_input} />
                <input type='text' name="max" placeholder="to" className={s.price_input} />
            </form>
        </div>
      
            <div className={s.labelContainer}>
              <label> Discounted items </label>
              <input onClick={checkBoxHandler} type="checkbox" />
            </div>
      
            <div className={`${s.labelContainer} ${s.sort}`}>
              <label> Sorted </label>
              <select value={sortType} onChange={handleSortChange} className={s.select_filter}>
                <option value="">Default</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
    )
}

export default Filter