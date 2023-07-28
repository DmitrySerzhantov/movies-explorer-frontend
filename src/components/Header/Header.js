import {Route, Routes, Link, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import itemNavigation from '../../utils/Constans';
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  const path = ['/movies', '/saved-movies', '/profile'].find(
    (i) => i === location.pathname
  );
  const [burger, setBurger] = useState(false);
  const [hideButton, sethideButton] = useState(false);
  const [hideHeader, sethideHeader] = useState(false);
  useEffect(() => {
    sethideHeader((path || '/') === location.pathname);

    if (window.screen.availWidth <= 768) {
      setBurger(true);
      sethideButton('header__button_hide');
    }
    console.log(location.pathname);
  }, [location.pathname, path]);
  return (
    <div className={hideHeader ? 'header' : 'header__button_hide'}>
      <Navigation
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        items={itemNavigation}
      />
      <header className='header__container'>
        <Routes>
          <Route
            path={path || '/'}
            element={
              <button
                className='header__button-logo'
                onClick={() => navigate('/')}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path={path}
            element={
              <div className='header__button-movies'>
                <Link
                  className={
                    location.pathname === '/movies'
                      ? `header__button header__button_active ${hideButton}`
                      : `header__button ${hideButton}`
                  }
                  to='/movies'
                >
                  Фильмы
                </Link>
                <Link
                  className={
                    location.pathname === '/saved-movies'
                      ? `header__button header__button_active ${hideButton} `
                      : `header__button ${hideButton} `
                  }
                  to='/saved-movies'
                >
                  Сохранённые фильмы
                </Link>
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route
            path={path}
            element={
              <>
                <Link
                  className={
                    hideButton
                      ? `header__button-account_link ${hideButton}`
                      : `header__button-account_link  ${hideButton}`
                  }
                  to='/profile'
                >
                  Аккаунт
                </Link>
              </>
            }
          />
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
                className={
                  burger
                    ? 'header__button-burger'
                    : `header__button-burger header__button_hide`
                }
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}
export default Header;
