import {Route, Routes, Link, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import {itemNavigation} from '../../utils/constans';
import logo from '../../images/logo/logo.svg';
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const path = ['/movies', '/saved-movies', '/profile'].find(
    (i) => i === location.pathname
  );

  const [hideHeader, sethideHeader] = useState(false);
  useEffect(() => {
    sethideHeader((path || '/') === location.pathname);
  }, [location.pathname, path]);
  return (
    <header className={hideHeader ? 'header' : 'header-button-hide'}>
      <nav className='header__container'>
        <Routes>
          <Route
            path={path || '/'}
            element={
              <button
                src={logo}
                onClick={() => navigate('/')}
                alt='Логотип'
                className='header__logo'
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path={path}
            element={
              <Navigation
                setMenuActive={setMenuActive}
                menuActive={menuActive}
                items={itemNavigation}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Link className='header__button-signup' to='/signup'>
                  Регистрация
                </Link>
                <Link className='header__button-signin' to='/signin'>
                  Войти
                </Link>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path={path}
            element={
              <button
                type='button'
                onClick={() => setMenuActive(!menuActive)}
                className='header__button-burger'
              />
            }
          />
        </Routes>
      </nav>
    </header>
  );
}
export default Header;
