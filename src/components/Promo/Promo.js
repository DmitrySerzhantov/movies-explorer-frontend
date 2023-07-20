import promoLogo from '../../images/text-logo.svg';
function Promo() {
  return (
    <section className='promo'>
      <div className='container'>
        <article className='promo__about'>
          <h1 className='promo__title'>
            Учебный проект студента факультета <br /> Веб-разработки.
          </h1>
          <p className='promo__text'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className='promo__button'>Узнать больше</button>
          <img
            className='promo__logo'
            src={promoLogo}
            alt='Логотип секции промо'
          ></img>
        </article>
      </div>
    </section>
  );
}
export default Promo;
