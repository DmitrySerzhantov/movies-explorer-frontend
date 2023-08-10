import {Link, useLocation} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {BASE_URL_BEATFILM_MOVIES} from '../../utils/MoviesApi';
import {deleteMovie, savedMovie} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function MoviesCard({movie, arrSavedMovies, setArrSavedMovies}) {
  const [movieSaved, setMovieSaved] = useState({});
  const currentUser = useContext(CurrentUserContext);
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const dataForSavingMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    trailerLink: movie.trailerLink,
    movieId: movie.id,
    thumbnail: `${BASE_URL_BEATFILM_MOVIES}${movie.image.formats.thumbnail.url}`,
    image: `${BASE_URL_BEATFILM_MOVIES}${movie.image.url}`,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
  let location = useLocation();
  const min = movie.duration % 60;
  const hr = (movie.duration - min) / 60;
  const [styleButtton, setStyleButtton] = useState('card__button_style_save');
  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setStyleButtton('card__button_style_delete');
    } else if (isSavedMovie && location.pathname === '/movies') {
      setStyleButtton('card__button_style_saved');
    }
    checkIsSavedMovie();
  }, [location.pathname, currentUser, isSavedMovie]); // eslint-disable-line react-hooks/exhaustive-deps

  function checkIsSavedMovie() {
    arrSavedMovies.map((item) => {
      if (item.movieId === movie.id) {
        setIsSavedMovie(true);
        setMovieSaved(item);
      }
      return item;
    });
  }
  function updateArrSavedMovies(element) {
    if (!isSavedMovie) {
      setArrSavedMovies([...arrSavedMovies, element]);
    } else {
      setArrSavedMovies(
        arrSavedMovies.filter((e) => e.movieId !== element.movieId)
      );
    }
  }

  function handleCardSave() {
    if (!isSavedMovie) {
      savedMovie(dataForSavingMovie)
        .then((res) => {
          updateArrSavedMovies(res);
          setIsSavedMovie(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isSavedMovie) {
      deleteMovie(movieSaved._id)
        .then((res) => {
          updateArrSavedMovies(res);
          setIsSavedMovie(false);
          setStyleButtton('card__button_style_save');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <section className='card'>
      <div className='card__info'>
        <h3 className='card__name-movie'>{movie.nameRU}</h3>
        <span className='card__duration'>{`${hr}ч ${min}м`} </span>
        <button
          onClick={() => handleCardSave()}
          className={`card__button ${styleButtton}`}
        />
      </div>
      <Link target='_blank' to={movie.trailerLink}>
        <img
          className='card__poster'
          alt='постер фильма'
          onClick={() => {
            console.log(movie.trailerLink);
          }}
          src={`${BASE_URL_BEATFILM_MOVIES}${movie.image.url}`}
        ></img>
      </Link>
    </section>
  );
}
export default MoviesCard;
