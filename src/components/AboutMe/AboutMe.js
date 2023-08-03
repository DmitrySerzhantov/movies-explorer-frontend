import foto from '../../images/foto.png';
function AboutMe() {
  return (
    <section className='about-me'>
      <div className='container'>
        <h2 className='about-me__title title-section'>Студент</h2>
        <article className='about-me__content'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__about'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/DmitrySerzhantov'
          >
            Github
          </a>
          <img src={foto} className='about-me__avatar' alt='фото студента' />
        </article>
      </div>
    </section>
  );
}
export default AboutMe;
