import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {BASE_URL_BEATFILM_MOVIES} from '../../utils/MoviesApi';
import {savedMovie} from '../../utils/MainApi';

function MoviesCard({movie, nameRU, duration, image, owner, userId}) {
  let location = useLocation();
  const min = duration % 60;
  const hr = (duration - min) / 60;
  const [styleButtton, setStyleButtton] = useState('card__button_style_save');

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setStyleButtton('card__button_style_delete');
    } else if (owner === userId && location.pathname === '/movies') {
      setStyleButtton('card__button_style_saved');
    }
  }, [location.pathname, owner, userId]);

  function handleCardSave(movie) {
    savedMovie(movie)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className='card'>
      <div className='card__info'>
        <h3 className='card__name-movie'>{nameRU}</h3>
        <span className='card__duration'>{`${hr}ч ${min}м`} </span>
        <button
          onClick={(evt) => handleCardSave(movie)}
          className={`card__button ${styleButtton}`}
        />
      </div>
      <img
        className='card__poster'
        alt='постер фильма'
        src={`${BASE_URL_BEATFILM_MOVIES}${image.url}`}
      ></img>
    </section>
  );
}
export default MoviesCard;
