import {Route, Routes, Link, useNavigate, useLocation} from 'react-router-dom';

function Header() {
  let location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();

  const path = ['/movies', '/saved-movies', '/profile'].find(
    (i) => i === location.pathname
  );
  console.log(path);
  return (
    <div className='container'>
      <header className='header'>
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
                    <Link className='header__button-movies-link' to='/movies'>
                      Фильмы
                    </Link>
                    <Link
                      className='header__button-saved-movies'
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
