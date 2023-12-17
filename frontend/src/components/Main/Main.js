import s from './Main.module.css';
import Img from '../../images/img.jpg'
import Button from '../../UI/Button';

function Main({scrollHandler}){
    return(
        <div style={{backgroundImage: `url(${Img})`}} className={s.main}>
            <h1 className={s.text}>Amazing Discounts on Garden Products!</h1>
                <Button onClick={scrollHandler} title='Check out' theme='green' size='x_green'/>
        </div>
    )
}

export default Main