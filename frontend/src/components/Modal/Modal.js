import s from './Modal.module.css'


function Modal({active, setActive, text}){

    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <button className={s.button} onClick={() => setActive(false)}>x</button>
                {text}
            </div>
        </div>
    )
}


export default Modal