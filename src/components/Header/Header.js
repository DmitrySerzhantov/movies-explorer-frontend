import {Route, Routes, Link} from 'react-router-dom';
import logo from '../../images/logo/logo.svg';

function Header() {
  return (
    <header className='header'>
      <button className='header__button-logo'>
        <Routes>
          <Route
            path='*'
            element={<Link className='header__button-logo_link' to='/'></Link>}
          />
        </Routes>
      </button>

      <nav className='header__nav'>
        <button
          id='header__button-signup'
          className='header__button-signup'
          onClick={() => {}}
        >
          <Routes>
            <Route
              path='/'
              element={
                <Link className='header__button-signup' to='/sign-up'>
                  Регистрация
                </Link>
              }
            />
          </Routes>
        </button>
        <button
          id='header__button-signin'
          className='header__button-signin'
          onClick={() => {
            console.log('ssss');
          }}
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
        </button>
      </nav>
    </header>
  );
}
export default Header;
