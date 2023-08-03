import {portfolioItems} from '../../utils/constans';
function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='container'>
        <h2 className='portfolio__title title-section'>Портфолио</h2>
        <ul className='portfolio__list'>
          {portfolioItems.map((item, i) => (
            <li className='portfolio__item' key={i}>
              <a className='portfolio__link' href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Portfolio;
