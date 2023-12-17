import s from './Button.module.css'

function Button(props){

    const {title, theme, size, ...otherProps} = props

    return(
        <button className={`${s.btn_main} ${s[theme]} ${s[size]}`} {...otherProps}>
            {title}
        </button>
    )
}

export default Button
