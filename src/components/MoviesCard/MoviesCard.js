import poster from '../../images/poster.png';

function MoviesCard() {
  return (
    <section className='card'>
      <div className='card__info'>
        <h3 className='card__name-movie'>33 слова о дизайне</h3>
        <span className='card__duration'>1ч 47м</span>
        <button className='card__button-save' />
      </div>
      <img className='card__poster' alt='постер фильма' src={poster}></img>
    </section>
  );
}
export default MoviesCard;
