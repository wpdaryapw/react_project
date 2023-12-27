import s from './Header.module.css'
import Logo from '../../images/logo.svg'
import {ReactComponent as BasketIcon} from '../../images/icon.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

  const {items} = useSelector(store => store.basket)

    return (
      <header className={s.main}>
        <div className={s.nav_wrapper}>
          <Link to={'/'}>
            <img src={Logo} className={s.logo}/>
          </Link>

        <nav className={s.nav}>
              <Link to={'/'}>Main Page</Link>
              <Link to={'/categories/all'}>Categories</Link>
              <Link to={'/products/all'}>All products</Link>
              <Link to={'/products/sales'}>All sales</Link>
        </nav>

        <div className={s.basket_wrapper}>
            <Link to={'/basket'} className={s.basket_icon_wrapper}>
                <BasketIcon className={s.icon}/>
                {items.length > 0 && <div className={s.items_number}>{items.length}</div>}
            </Link>
        </div>
        </div>
      </header>
    )
  }
  
  export default Header