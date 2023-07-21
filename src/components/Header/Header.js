import {Route, Routes, Link} from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
      <header className='header'>
        <button className='header__button-logo'>
          <Routes>
            <Route
              path='*'
              element={
                <Link className='header__button-logo_link' to='/'></Link>
              }
            />
          </Routes>
        </button>
        <nav>
          <button
            id='header__button-movies'
            className='header__button-movies'
            onClick={() => {}}
          >
            <Routes>
              {['/movies', '/saved-movies'].map((path, i) => (
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
                  key={i}
                />
              ))}
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
              {['/movies', '/saved-movies'].map((path, i) => (
                <Route
                  path={path}
                  element={
                    <>
                      <Link
                        className='header__button-account_link'
                        to='/saved-movies'
                      >
                        Аккаунт
                      </Link>
                    </>
                  }
                  key={i}
                />
              ))}
            </Routes>
          </button>
          <button
            id='header__button-signup'
            className='header__button-signup'
            onClick={() => {}}
          >
            <Routes>
              <Route
                path='/'
                element={
                  <Link className='header__button-signup-link' to='/sign-up'>
                    Регистрация
                  </Link>
                }
              />
            </Routes>
          </button>
          <div
            id='header__button-signin'
            className='header__button-signin '
            onClick={() => {}}
          >
            <Routes>
              <Route
                path='/'
                element={
                  <Link className='header__button-signin_link' to='/signin'>
                    Войти
                  </Link>
                }
              />
            </Routes>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
