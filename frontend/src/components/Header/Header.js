import s from './Header.module.css'
import Logo from '../../images/logo.svg'
import BasketIcon from '../../images/icon.svg'
import { Link } from 'react-router-dom';


function Header() {
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

          <Link to={'/basket'}>
            <img src={BasketIcon} className={s.icon}/>
          </Link>
        </div>
      </header>
    );
  }
  
  export default Header