function Techs() {
  return (
    <section className='techs'>
      <div className='container'>
        <h2 className='techs__title title-section'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__item'>
            <a
              className='techs__link'
              href='https://ru.wikipedia.org/wiki/HTML'
            >
              HTML
            </a>
          </li>
          <li className='techs__item'>
            <a
              className='techs__link'
              href='https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics'
            >
              CSS
            </a>
          </li>
          <li className='techs__item'>
            <a
              className='techs__link'
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            >
              JS
            </a>
          </li>
          <li className='techs__item'>
            <a className='techs__link' href='https://react.dev/'>
              React
            </a>
          </li>
          <li className='techs__item'>
            <a className='techs__link' href='https://git-scm.com/'>
              Git
            </a>
          </li>
          <li className='techs__item'>
            <a className='techs__link' href='https://expressjs.com/'>
              Express.js
            </a>
          </li>
          <li className='techs__item'>
            <a className='techs__link' href='https://www.mongodb.com/'>
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Techs;
