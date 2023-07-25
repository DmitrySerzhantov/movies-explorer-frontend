import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Profile() {
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  useEffect(() => {}, [editProfile]);
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>

      <form className='profile__form'>
        <div className='profile__name'>
          <span className='profile__span'>Имя</span>
          <input
            disabled={editProfile}
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            className='profile__input profile__input_name'
            placeholder='Виталий'
          />
        </div>
        <div className='profile__email'>
          <span className='profile__span'>E-mail</span>
          <input
            disabled={editProfile}
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='profile__input register__input_email'
            placeholder='pochta@yandex.ru'
          />
        </div>
        <button
          type='button'
          className={
            editProfile ? 'profile__button-edit ' : ' profile__button_hide'
          }
          onClick={() => setEditProfile(false)}
        >
          Редактировать
        </button>
        <button
          className={
            editProfile ? 'profile__button-logout ' : 'profile__button_hide'
          }
          onClick={() => navigate('/signin')}
        >
          Выйти из аккаунта
        </button>
        <button
          type='submit'
          className={
            !editProfile
              ? 'profile__button-save profile__button'
              : 'profile__button-save profile__button_hide'
          }
        >
          Сохранить
        </button>
      </form>
    </section>
  );
}
export default Profile;
