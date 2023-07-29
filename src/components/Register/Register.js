import {Link, useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <span className='register__form-subtitle'>Имя</span>
        <input
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          className='register__input '
        />
        <span className='register__form-subtitle'>E-mail</span>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          className='register__input '
        />
        <span className='register__form-subtitle'>Пароль</span>
        <input
          className='register__input'
          id='password'
          name='password'
          type='password'
          autoComplete='new-password'
        />
      </form>
      <button className='register__button' onClick={() => navigate('/signin')}>
        Зарегистрироваться
      </button>
      <p className='register__footer'>
        Уже зарегистрированы?{' '}
        <Link className='register__footer-button' to='/signin'>
          Войти
        </Link>
      </p>
    </section>
  );
}
export default Register;
