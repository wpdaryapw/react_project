import s from './CategoriesItem.module.css'

function CategoriesItem({id, image, title}){



    return(
        <div>
            <img src={image} className={s.category_image}/>
            <h3 className={s.category_text}>{title}</h3>
        </div>
    )
}

export default CategoriesItem
