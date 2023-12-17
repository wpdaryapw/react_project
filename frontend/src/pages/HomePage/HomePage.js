import s from './HomePage.module.css'
import CategoriesCards from "../../components/CategoriesCards/CategoriesCards"
import Main from "../../components/Main/Main"
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { fetchTopSale } from '../../asyncActions/ProductList'
import ProductsList from '../../components/ProductsList/ProductsList'
import DiscountForm from '../../components/DiscountForm/DiscountForm'

function HomePage(){

    const dispatch = useDispatch()

    let targetScrollRef = useRef()

    function scrollHandler(){
        targetScrollRef.current.scrollIntoView({behavior: 'smooth'})
      }

    useEffect(() => {
        dispatch(fetchTopSale())
    }, [])

    return(
        <div>
            <Main scrollHandler={scrollHandler}/>
            <CategoriesCards items={4} button={true}/>
            <DiscountForm/>
            <ProductsList button={true} ref={targetScrollRef}/>
        </div>
    )
}

export default HomePage