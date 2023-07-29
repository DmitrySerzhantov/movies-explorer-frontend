import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Profile() {
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  useEffect(() => {}, [editProfile]);
  const [emailErrMessage, setEmailErrMessage] = useState(true);
  const [nameErrMessage, setnameErrMessage] = useState(true);
  const [validEmal, setValidEmal] = useState(false);
  const [validName, setvalidName] = useState(false);
  return (
    <section className='profile'>
      <form className='profile__form'>
        <h1 className='profile__title'>Привет, Виталий!</h1>

        <label className='profile__name'>
          <input
            required
            minLength={2}
            maxLength={30}
            disabled={editProfile}
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            className='profile__input'
            placeholder='Виталий' //будет поступать из пропсов
            onChange={(e) => {
              setnameErrMessage(e.target.validationMessage);
              setvalidName(e.target.validity.valid);
            }}
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
            placeholder='pochta@yandex.ru' //будет поступать из пропсов
            onChange={(e) => {
              setEmailErrMessage(e.target.validationMessage);
              setValidEmal(e.target.validity.valid);
            }}
          />
          <span className='profile__error'>{emailErrMessage}</span>
        </label>
      </form>
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
        onClick={() => navigate('/signin')}
      >
        Выйти из аккаунта
      </button>
      <button
        disabled={validName && validEmal ? false : true}
        type='submit'
        className={
          !editProfile ? 'profile__button-save' : 'profile__button-hide'
        }
      >
        Сохранить
      </button>
    </section>
  );
}
export default Profile;
