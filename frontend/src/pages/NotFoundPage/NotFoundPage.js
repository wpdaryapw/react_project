import s from './NotFoundPage.module.css'
import Err from '../../images/404.jpg'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/Button'

function NotFoundPage(){

    let navigate = useNavigate()

    return(
        <div className={s.main}>
            <div className={s.pic}>
                <img className={s.pic} src={Err}/>
            </div>
            <div className={s.text}>
                <h2 className={s.main_text}>Page Not Found</h2>
                <p>We’re sorry, the page you requested could not be found. <br/>Please go back to the homepage.</p>
            </div>

            <Button onClick={() => navigate('/')} title='Go Home' theme='green' size='x_green'/>
        </div>
    )
}

export default NotFoundPage