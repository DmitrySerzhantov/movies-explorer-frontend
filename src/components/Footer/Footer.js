function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <nav className='footer__nav'>
          <p className='footer__year'>© 2023</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a className='footer__link' href='https://practicum.yandex.ru/'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a
                className='footer__link'
                href='https://github.com/DmitrySerzhantov'
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
