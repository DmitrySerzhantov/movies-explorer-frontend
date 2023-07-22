import {Link} from 'react-router-dom';

function Login() {
  return (
    <section className='register'>
      <button className='register__button-home'>
        <Link className='register__button-home-link' to='/'></Link>
      </button>
      <h1 className='register__title'>Рады видеть!</h1>

      <form className='register__form'>
        <span className='register__form-subtitle'>E-mail</span>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          className='register__input register__input_email'
        />
        <span className='register__form-subtitle'>Пароль</span>
        <input
          className='register__input register__input_password'
          id='password'
          name='password'
          type='password'
          autoComplete='new-password'
        />
        <button className='register__button'>Войти</button>
        <p className='register__footer'>
          Ещё не зарегистрированы?{' '}
          <Link className='register__footer-button' to='/signup'>
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}
export default Login;
