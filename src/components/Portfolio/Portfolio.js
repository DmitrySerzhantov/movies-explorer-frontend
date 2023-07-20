function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='container'>
        <h2 className='portfolio__title title-section'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a
              className='portfolio__link'
              href='https://github.com/DmitrySerzhantov/how-to-learn'
            >
              Статичный сайт
            </a>
            <a
              className='portfolio__link-copy'
              href='https://github.com/DmitrySerzhantov/how-to-learn'
            >
              ↗
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__link'
              href='https://github.com/DmitrySerzhantov/russian-travel'
            >
              Адаптивный сайт
            </a>
            <a
              className='portfolio__link-copy'
              href='https://github.com/DmitrySerzhantov/russian-travel'
            >
              ↗
            </a>
          </li>
          <li className='portfolio__item'>
            <a
              className='portfolio__link'
              href='https://github.com/DmitrySerzhantov/react-mesto-api-full-gha'
            >
              Одностраничное приложение
            </a>
            <a
              className='portfolio__link-copy'
              href='https://github.com/DmitrySerzhantov/react-mesto-api-full-gha'
            >
              ↗
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
