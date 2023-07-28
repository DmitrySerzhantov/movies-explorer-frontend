import {useLocation} from 'react-router-dom';
import poster from '../../images/poster.png';
import {useEffect, useState} from 'react';

function MoviesCard({owner, userId}) {
  let location = useLocation();
  const [styleButtton, setStyleButtton] = useState('card__button_style_save');
  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setStyleButtton('card__button_style_delete');
    } else if (owner === userId && location.pathname === '/movies') {
      setStyleButtton('card__button_style_saved');
    }
  }, [location.pathname, owner, userId]);

  return (
    <section className='card'>
      <div className='card__info'>
        <h3 className='card__name-movie'>33 слова о дизайне</h3>
        <span className='card__duration'>1ч 47м</span>
        <button className={`card__button ${styleButtton}`} />
      </div>
      <img className='card__poster' alt='постер фильма' src={poster}></img>
    </section>
  );
}
export default MoviesCard;
