import s from './ModalOrder.module.css'
import { ReactComponent as Item} from '../../images/krestik.svg'

function ModalOrder({active, setActive}){

    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <Item className={s.button} onClick={() => setActive(false)}/>
                <h2>Congratulations!</h2>
                <p>Your order has been successfully placed on the website.<br/>
                    A manager will contact you shortly to confirm your order.</p>
            </div>
        </div>
    )
}


export default ModalOrder
