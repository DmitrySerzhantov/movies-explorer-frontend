import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {regularValidetEmail} from '../../utils/constans';
function Login({onLogin, messageErorr}) {
  const navigate = useNavigate();
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setpasswordValid] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [messageErr, setMessageErr] = useState('');

  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value, validationMessage, id} = e.target;
    if (id === 'email') {
      !regularValidetEmail.test(value)
        ? setEmailValid(false)
        : setEmailValid(true);
    } else if (id === 'password') {
      setpasswordValid(e.target.validity.valid);
      setPasswordErrMessage(validationMessage);
    }

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  useEffect(() => {
    !emailValid && emailValid !== null
      ? setEmailErrMessage('Введите корректный email')
      : setEmailErrMessage('');
    setValidForm(emailValid && passwordValid);
    setTimeout(() => {
      setMessageErr(messageErorr);
    }, 1000);
  }, [emailValid, passwordValid, messageErorr, onLogin, messageErr]);

  const handleSubmit = (e) => {
    onLogin(formValue.password, formValue.email);
    e.preventDefault();
  };

  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
      <h1 className='register__title'>Рады видеть!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <span htmlFor='password' className='register__input-error'>
          {passwordErrMessage}
        </span>
        <button
          className={
            messageErr
              ? 'register__button login-button register__messageErorr'
              : 'register__button login-button'
          }
          disabled={validForm ? false : true}
        >
          {messageErr ? messageErr : 'Войти'}
        </button>
      </form>
      <p className='register__footer'>
        Ещё не зарегистрированы?{' '}
        <button
          className='register__footer-button'
          onClick={() => navigate('/signup')}
        >
          Регистрация
        </button>
      </p>
    </section>
  );
}
export default Login;
