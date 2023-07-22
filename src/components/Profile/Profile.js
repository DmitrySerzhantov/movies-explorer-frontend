function Profile() {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>

      <form className='profile__form'>
        <div className='profile__name'>
          <span className='profile__span'>Имя</span>
          <input
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
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            className='profile__input register__input_email'
            placeholder='pochta@yandex.ru'
          />
        </div>

        <button className='profile__button-edit'>Редактировать</button>
        <button className='profile__button-logout'>Выйти из аккаунта</button>
      </form>
    </section>
  );
}
export default Profile;
