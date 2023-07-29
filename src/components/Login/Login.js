import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
      <h1 className='register__title'>Рады видеть!</h1>
      <form className='register__form'>
        <span className='register__form-subtitle'>E-mail</span>
        <input
          required
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          minLength='2'
          maxLength='40'
          className='register__input'
          placeholder='Ваш email'
          onChange={(e) => setEmailErrMessage(e.target.validationMessage)}
        />
        <span className='register__input-error'>{emailErrMessage}</span>
        <span className='register__form-subtitle'>Пароль</span>
        <input
          required
          className='register__input'
          id='password'
          name='password'
          type='password'
          minLength='5'
          maxLength='40'
          autoComplete='new-password'
          placeholder='Ваш пароль'
          onChange={(e) => setPasswordErrMessage(e.target.validationMessage)}
        />
        <span htmlFor='password' className='register__input-error'>
          {passwordErrMessage}
        </span>
      </form>
      <button className='register__button' onClick={() => navigate('/movies')}>
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
