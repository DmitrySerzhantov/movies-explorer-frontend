import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import {itemNavigation} from '../../utils/constans';
import logo from '../../images/logo/logo.svg';
function Header({loggedIn}) {
  const [menuActive, setMenuActive] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const path = ['/movies', '/saved-movies', '/profile'].find(
    (i) => i === location.pathname
  );

  const [hideHeader, sethideHeader] = useState(false);
  useEffect(() => {
    sethideHeader((path || '/') === location.pathname);
  }, [location.pathname, path, loggedIn]);
  return (
    <header className={hideHeader ? 'header' : 'header-button-hide'}>
      <nav className='header__container'>
        <button
          src={logo}
          onClick={() => navigate('/')}
          alt='Логотип'
          className='header__logo'
        />
        {loggedIn ? (
          <Navigation
            setMenuActive={setMenuActive}
            menuActive={menuActive}
            items={itemNavigation}
          />
        ) : (
          <></>
        )}
        {loggedIn ? (
          <></>
        ) : (
          <>
            <button className='header__button-signup' to='/signup'>
              Регистрация
            </button>
            <Link className='header__button-signin' to='/signin'>
              Войти
            </Link>
          </>
        )}

        {loggedIn ? (
          <button
            type='button'
            onClick={() => setMenuActive(!menuActive)}
            className='header__button-burger'
          />
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
export default Header;
