import s from './Footer.module.css';
import Inst from '../../images/ic-instagram.svg'
import Vec from '../../images/Vector.svg'
import { Link } from 'react-router-dom';

function Footer(){
    return(
    <footer>
            <h2>Contact</h2>
    <div className={s.wrapper}>
        <div className={s.item}>
                <p>Phone</p>
                <h3>+7 (499) 350-66-04</h3>
            </div>
        
        <div className={s.item}>
                <p>Socials</p>
            <div className={s.icons}>
                <Link to={'https://www.instagram.com/'}><img src={Inst}/></Link>
                <Link to={'https://www.whatsapp.com/?lang=ru_RU'}><img src={Vec}/></Link>
            </div>
            </div>

        <div className={s.item}>
                <p>Address</p>
                <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
            </div>

         <div className={s.item}>
                <p>Working Hours</p>
                <h3>24 hours a day</h3>
            </div>

        <div className={s.item}>
                <div style={{width: '100%'}}><iframe width="1360" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=IThub%20college%20Dubininskaya%20Ulitsa,%2096,%20Moscow,%20Russia,%20115093+(ITHUB)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
            </div>
        </div>
    </footer>
    )
}

export default Footer