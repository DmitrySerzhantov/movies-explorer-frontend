import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {regularValidetEmail} from '../../utils/constans';

function Register({handleRegister}) {
  const navigate = useNavigate();
  const [nameErrMessage, setNameErrMessage] = useState('');
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setpasswordValid] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const [formValue, setFormValue] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value, validationMessage, id} = e.target;
    if (id === 'name') {
      e.target.validity.patternMismatch
        ? setNameErrMessage(
            'Допустимы только: латинские или кириллические буквы, пробел и тире .'
          )
        : setNameErrMessage(validationMessage);
      setNameValid(e.target.validity.valid);
    } else if (id === 'email') {
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
    setValidForm(nameValid && emailValid && passwordValid);
  }, [nameValid, emailValid, passwordValid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {name, password, email} = formValue;
    handleRegister(name, password, email);
  };

  return (
    <section className='register'>
      <button className='register__button-home' onClick={() => navigate('/')} />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form required className='register__form' onSubmit={handleSubmit}>
        <span className='register__form-subtitle'>Имя</span>
        <input
          required
          id='name'
          name='name'
          type='text'
          pattern='[a-zA-Zа-яА-Я\s\-]{0,}'
          autoComplete='name'
          className='register__input'
          placeholder='Ваше имя'
          maxLength={30}
          minLength={2}
          value={formValue.name}
          onChange={handleChange}
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
          value={formValue.email}
          onChange={handleChange}
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
          value={formValue.password}
          onChange={handleChange}
        />
        <span className='register__input-error'>{passwordErrMessage}</span>
        <button
          type='submit'
          className='register__button'
          disabled={validForm ? false : true}
        >
          Зарегистрироваться
        </button>
      </form>
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
