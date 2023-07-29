import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Profile() {
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState(true);
  useEffect(() => {}, [editProfile]);
  return (
    <section className='profile'>
      <form className='profile__form'>
        <h1 className='profile__title'>Привет, Виталий!</h1>

        <label className='profile__name'>
          <input
            disabled={editProfile}
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            className='profile__input'
            placeholder='Виталий'
          />
          Имя
        </label>
        <label className='profile__email'>
          E-mail
          <input
            disabled={editProfile}
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='profile__input register__input_border-style_none'
            placeholder='pochta@yandex.ru'
          />
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
