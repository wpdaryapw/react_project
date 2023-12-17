import { Link } from "react-router-dom";

function CategoriesItem({id, image, title}){



    return(
        <div>
            <img width={'200px'} src={image}/>
            <h3>{title}</h3>
        </div>
    )
}

export default CategoriesItem
