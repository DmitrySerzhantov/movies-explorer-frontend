import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';
import {findMovies} from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function Movies({
  foundMovies,
  setFoundMovies,
  arrSavedMovies,
  setArrSavedMovies,
  getSavedMovies,
}) {
  const [formValue, setFormValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(undefined);
  const [isValidForm, setIsValidForm] = useState(undefined);
  const [messageErrForm, setMessageErrForm] = useState('');

  function savedDataLocalStorage(movie) {
    const lastSearch = {movie, formValue, isCheckboxChecked};
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
  }

  useEffect(() => {
    if (isCheckboxChecked !== undefined) {
      handleFindMovies();
    }
  }, [isCheckboxChecked]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('lastSearch')) !== null &&
      localStorage.getItem('LoggedIn')
    ) {
      setFormValue(JSON.parse(localStorage.getItem('lastSearch')).formValue);
      setIsCheckboxChecked(
        JSON.parse(localStorage.getItem('lastSearch')).isCheckboxChecked
      );
      setFoundMovies(JSON.parse(localStorage.getItem('lastSearch')).movie);
    }
    getSavedMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleFindMovies() {
    if (isValidForm) {
      setMessageErrForm(<Preloader />);
      findMovies()
        .then((movies) => {
          filterMovies(movies);
        })
        .catch((err) => {
          console.log(err);
          setMessageErrForm(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        });
    } else if (isValidForm !== undefined) {
      setMessageErrForm('Нужно ввести ключевое слово');
    }
  }

  const filterMovies = (movies) => {
    const movie = movies.filter((e) => {
      return (
        e.nameRU.toLowerCase().includes(formValue.toLowerCase()) ||
        e.nameEN.toLowerCase().includes(formValue.toLowerCase())
      );
    });

    const shortFilm = movie.filter((e) => {
      return e.duration <= 40;
    });

    isCheckboxChecked ? setFoundMovies(shortFilm) : setFoundMovies(movie);
    isCheckboxChecked
      ? savedDataLocalStorage(shortFilm)
      : savedDataLocalStorage(movie);

    handleSearchForm(movie);
  };

  function handleSearchForm(movie) {
    if (movie.length === 0) {
      setMessageErrForm('Ничего не найдено');
    } else {
      setMessageErrForm('');
    }
  }

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsValidForm(true);
      setMessageErrForm('');
    } else {
      setMessageErrForm('Нужно ввести ключевое слово');
      setIsValidForm(false);
    }
    setFormValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleFindMovies();
  }

  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          handleChange={handleChange}
          formValue={formValue}
          setFormValue={setFormValue}
          handleSubmit={handleSubmit}
        ></SearchForm>
        <FilterCheckbox
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        ></FilterCheckbox>
        <MoviesCardList
          messageErrForm={messageErrForm}
          foundMovies={foundMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        ></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
