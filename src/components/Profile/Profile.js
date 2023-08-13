import {useState, useEffect, useContext} from 'react';
import {logout, setUserProfile} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useNavigate} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import {regularValidetEmail} from '../../utils/constans';

function Profile({setFoundMovies}) {
  const currentUser = useContext(CurrentUserContext);
  const [editProfile, setEditProfile] = useState(true);
  const [emailErrMessage, setEmailErrMessage] = useState(true);
  const [nameErrMessage, setNameErrMessage] = useState(true);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formValue, setFormValue] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
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
    }

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  useEffect(() => {
    setFormValue({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.email, currentUser.name]);

  useEffect(() => {
    !emailValid && emailValid !== null
      ? setEmailErrMessage('Введите корректный email')
      : setEmailErrMessage('');
    (formValue.name !== currentUser.name ||
      formValue.email !== currentUser.email) &&
    emailValid &&
    nameValid
      ? setValidForm(true)
      : setValidForm(false);
  }, [
    nameValid,
    emailValid,
    formValue.name,
    currentUser.email,
    currentUser.name,
    formValue.email,
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitMessage(<Preloader />);
    setUserProfile(formValue)
      .then((res) => {
        setFormValue({
          name: res.name,
          email: res.email,
        });
        currentUser.name = res.name;
        setSubmitMessage('');
        setValidForm(false);
        setSubmitMessage('Данные обновлены успешно.');
        setTimeout(() => {
          setSubmitMessage('');
          setEditProfile(true);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        setSubmitMessage('При обновлении профиля произошла ошибка.');
        setValidForm(false);
      });
  }

  return (
    <section className='profile'>
      <form
        className='profile__form'
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>

        <label className='profile__name'>
          <input
            required
            minLength={2}
            maxLength={30}
            disabled={editProfile}
            pattern='[a-zA-Zа-яА-Я\s\-]{0,}'
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            className='profile__input'
            value={formValue.name ?? ''}
          />
          Имя
          <span className='profile__error'>{nameErrMessage}</span>
        </label>
        <label className='profile__email'>
          E-mail
          <input
            required
            disabled={editProfile}
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='profile__input register__input_border-style_none'
            value={formValue.email ?? ''}
          />
          <span className='profile__error'>{emailErrMessage}</span>
        </label>
        <button
          type='button'
          className={
            editProfile ? 'profile__button-edit' : 'profile__button-hide'
          }
          onClick={() => setEditProfile(false)}
        >
          Редактировать
        </button>
        <button
          className={
            editProfile ? 'profile__button-logout ' : 'profile__button-hide'
          }
          onClick={() => {
            logout()
              .then((res) => {
                localStorage.clear();
                setFoundMovies([]);
                navigate('/');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Выйти из аккаунта
        </button>

        <button
          disabled={validForm ? false : true}
          type='submit'
          className={
            !editProfile ? 'profile__button-save' : 'profile__button-hide'
          }
        >
          <span className='profile__error-submit'>{submitMessage}</span>
          Сохранить
        </button>
      </form>
    </section>
  );
}
export default Profile;
