import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [nameErrMessage, setNameErrMessage] = useState('');
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  const [validEmal, setValidEmal] = useState(false);
  const [validName, setvalidName] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <span className='register__form-subtitle'>Имя</span>
        <input
          required
          id='name'
          name='name'
          type='text'
          autoComplete='name'
          className='register__input'
          placeholder='Ваше имя'
          maxLength={30}
          minLength={2}
          onChange={(e) => {
            setvalidName(e.target.validity.valid);
            setNameErrMessage(e.target.validationMessage);
          }}
        />
        <span className='register__input-error'>{nameErrMessage}</span>
        <span className='register__form-subtitle'>E-mail</span>
        <input
          required
          minLength={2}
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          className='register__input'
          placeholder='Ваш email'
          onChange={(e) => {
            setEmailErrMessage(e.target.validationMessage);
            setValidEmal(e.target.validity.valid);
          }}
        />
        <span className='register__input-error'>{emailErrMessage}</span>
        <span className='register__form-subtitle'>Пароль</span>
        <input
          required
          minLength={5}
          className='register__input'
          id='password'
          name='password'
          type='password'
          autoComplete='new-password'
          placeholder='Придумайте пароль'
          onChange={(e) => {
            setPasswordErrMessage(e.target.validationMessage);
            setvalidPassword(e.target.validity.valid);
          }}
        />
        <span className='register__input-error'>{passwordErrMessage}</span>
      </form>
      <button
        type='submit'
        className='register__button'
        disabled={validName && validEmal && validPassword ? false : true}
        onClick={() => navigate('/signin')}
      >
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
