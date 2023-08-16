import {Link, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {BASE_URL_BEATFILM_MOVIES} from '../../utils/MoviesApi';
import {deleteMovie, savedMovie} from '../../utils/MainApi';

function MoviesCard({movie, arrSavedMovies, setArrSavedMovies}) {
  const [movieSaved, setMovieSaved] = useState({});
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const [srcImage, setSrcImage] = useState('');
  const [idMovie, setIdMovie] = useState('');

  let location = useLocation();
  const min = movie.duration % 60;
  const hr = (movie.duration - min) / 60;
  const [styleButtton, setStyleButtton] = useState('card__button_style_save');

  useEffect(() => {
    setSrcImage(`${BASE_URL_BEATFILM_MOVIES}${movie.image.url}`);
    if (location.pathname === '/saved-movies') {
      setStyleButtton('card__button_style_delete');
      setSrcImage(movie.image);
      setIdMovie(movie._id);
      setIsSavedMovie(true);
    } else if (isSavedMovie && location.pathname === '/movies') {
      setStyleButtton('card__button_style_saved');
      setIdMovie(movieSaved._id);
    }
    checkIsSavedMovie();
  }, [arrSavedMovies, isSavedMovie, movie._id, movie.image, movieSaved._id]); // eslint-disable-line react-hooks/exhaustive-deps

  function checkIsSavedMovie() {
    if (arrSavedMovies !== undefined) {
      arrSavedMovies.map((item) => {
        if (item.movieId === movie.id) {
          setIsSavedMovie(true);
          setMovieSaved(item);
        }

        return item;
      });
    }
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

  function handleCardSave(e) {
    if (!isSavedMovie) {
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
      savedMovie(dataForSavingMovie)
        .then((res) => {
          updateArrSavedMovies(res);
          setIsSavedMovie(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isSavedMovie) {
      deleteMovie(idMovie)
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
          onClick={handleCardSave}
          className={`card__button ${styleButtton}`}
        />
      </div>
      <Link target='_blank' to={movie.trailerLink}>
        <img className='card__poster' alt='постер фильма' src={srcImage}></img>
      </Link>
    </section>
  );
}
export default MoviesCard;
