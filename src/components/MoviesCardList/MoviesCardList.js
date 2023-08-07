import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({isValidForm, foundMovies}) {
  let location = useLocation();
  return (
    <section className='movies-card'>
      <span className='movies-card__list-span'>{isValidForm}</span>
      <ul className='movies-card__list'>
        {foundMovies.map((movie) => (
          <MoviesCard
            key={movie.id}
            nameRU={movie.nameRU}
            duration={movie.duration}
            image={movie.image}
            owner={false}
            userId={true}
          ></MoviesCard>
        ))}
      </ul>
      <div className='movies-card__footer'>
        <button
          className={
            location.pathname === '/movies'
              ? 'movies-card__button'
              : 'movies-card__button_visible_none'
          }
        >
          Ещё
        </button>
      </div>
    </section>
  );
}
export default MoviesCardList;
