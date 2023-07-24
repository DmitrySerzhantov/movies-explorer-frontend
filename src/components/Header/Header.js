import {Route, Routes, Link, useNavigate, useLocation} from 'react-router-dom';

function Header() {
  let location = useLocation();
  const navigate = useNavigate();
  const path = ['/movies', '/saved-movies', '/profile'].find(
    (i) => i === location.pathname
  );
  return (
    <div className='header'>
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

        <nav>
          <button
            id='header__button-movies'
            className='header__button-movies'
            onClick={() => {}}
          >
            <Routes>
              <Route
                path={path}
                element={
                  <>
                    <Link
                      className={
                        location.pathname === '/movies'
                          ? 'header__button header__button_active'
                          : 'header__button'
                      }
                      to='/movies'
                    >
                      Фильмы
                    </Link>
                    <Link
                      className={
                        location.pathname === '/saved-movies'
                          ? 'header__button header__button_active'
                          : 'header__button'
                      }
                      to='/saved-movies'
                    >
                      Сохранённые фильмы
                    </Link>
                  </>
                }
              />
            </Routes>
          </button>
        </nav>
        <nav className='header__nav'>
          <button
            id='header__button-account'
            className='header__button-account'
            onClick={() => {}}
          >
            <Routes>
              <Route
                path={path}
                element={
                  <>
                    <Link className='header__button-account_link' to='/profile'>
                      Аккаунт
                    </Link>
                  </>
                }
              />
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
          </button>
        </nav>
      </header>
    </div>
  );
}
export default Header;
