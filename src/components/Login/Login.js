import {Link, useNavigate} from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
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
      </form>
        <button
          className='register__button'
          onClick={() => navigate('/movies')}
        >
          Войти
        </button>
        <p className='register__footer'>
          Ещё не зарегистрированы?{' '}
          <Link className='register__footer-button' to='/signup'>
            Регистрация
          </Link>
        </p>
    </section>
  );
}
export default Login;
