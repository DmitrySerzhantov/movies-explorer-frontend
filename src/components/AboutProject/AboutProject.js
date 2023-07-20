function AboutProject() {
  return (
    <section className='about-project'>
      <div className='container'>
        <h2 className='about-project__title title-section'>О проекте</h2>
        <ul className='about-project__list'>
          <li className='about-project__list-item'>
            <h3 className='about-project__list-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about-project__list-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className='about-project__list-item'>
            <h3 className='about-project__list-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about-project__list-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <div className='about-project__nav'>
          <figure className='about-project__nav-item'>
            <button className='about-project__nav-button_green'>
              1 неделя
            </button>
            <figcaption className='about-project__nav-caption'>
              Back-end
            </figcaption>
          </figure>
          <figure className='about-project__nav-item'>
            <button className='about-project__nav-button_black'>
              4 недели
            </button>
            <figcaption className='about-project__nav-caption'>
              Front-end
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
