import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useEffect, useState} from 'react';

function MoviesCardList({isValidForm, foundMovies}) {
  let location = useLocation();
  const [movies, setMovies] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(null);
  const [widthWindow, setWidthWindow] = useState(null);

  function handleClickButton() {
    if (widthWindow > 768) {
      return setNumberOfCards(numberOfCards + 3);
    } else if (widthWindow <= 768) {
      return setNumberOfCards(numberOfCards + 2);
    }
  }

  useEffect(() => {
    if (widthWindow > 768) {
      return setNumberOfCards(12);
    } else if (widthWindow <= 768 && widthWindow >= 550) {
      return setNumberOfCards(8);
    } else if (widthWindow <= 550) {
      return setNumberOfCards(5);
    }
  }, [widthWindow]);

  useEffect(() => {
    setMovies(foundMovies);
    setWidthWindow(window.outerWidth);
  }, [foundMovies, setWidthWindow, widthWindow, numberOfCards]);

  var doit;
  window.onresize = function (e) {
    clearTimeout(doit);
    doit = setTimeout(setWidthWindow(e.currentTarget.innerWidth), 100);
  };

  return (
    <section className='movies-card'>
      <span className='movies-card__list-span'>{isValidForm}</span>
      <ul className='movies-card__list'>
        {movies.map((movie, i) => {
          let item;
          if (i < numberOfCards) {
            return (item = (
              <MoviesCard
                key={movie.id}
                nameRU={movie.nameRU}
                duration={movie.duration}
                image={movie.image}
                owner={false}
                userId={true}
              ></MoviesCard>
            ));
          }
          return item;
        })}
      </ul>
      <div className='movies-card__footer'>
        <button
          onClick={() => handleClickButton()}
          className={
            location.pathname === '/movies'
              ? foundMovies.length > numberOfCards
                ? 'movies-card__button'
                : 'movies-card__button_visible_none'
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
