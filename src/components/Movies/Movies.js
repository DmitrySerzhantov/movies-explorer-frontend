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
  const [filteredMovies, setFilteredMovies] = useState([]);

  function savedDataLocalStorage(movie) {
    const lastSearch = {movie, formValue, isCheckboxChecked, isValidForm};
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
  }

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('lastSearch')) !== null &&
      localStorage.getItem('LoggedIn')
    ) {
      setFormValue(JSON.parse(localStorage.getItem('lastSearch')).formValue);
      setIsCheckboxChecked(
        JSON.parse(localStorage.getItem('lastSearch')).isCheckboxChecked
      );
      setFilteredMovies(JSON.parse(localStorage.getItem('lastSearch')).movie);
      setIsValidForm(
        JSON.parse(localStorage.getItem('lastSearch')).isValidForm
      );
    }
    getSavedMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleFindMovies() {
    findMovies()
      .then((movies) => {
        setFoundMovies(movies);
        handleSearchForm(movies);
        filterMovies(movies);
      })
      .catch((err) => {
        console.log(err);
        setMessageErrForm(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      });
  }

  const saerchMovies = () => {
    if (isValidForm && foundMovies.length === 0) {
      handleFindMovies();
    } else {
      filterMovies(foundMovies);
    }
  };

  const handleFilterCheckbox = (e) => {
    setIsCheckboxChecked(e.target.checked);

    if (filteredMovies.length !== 0) {
      filterMovies(filteredMovies, e.target.checked);
    }
    if (true) {
      filterMovies(foundMovies, e.target.checked);
    }
  };

  const filterMovies = (movies, isCheckboxChecked) => {
    const movie = movies.filter((e) => {
      return (
        e.nameRU.toLowerCase().includes(formValue.toLowerCase()) ||
        e.nameEN.toLowerCase().includes(formValue.toLowerCase())
      );
    });

    const shortFilm = movie.filter((e) => {
      return e.duration <= 40;
    });

    isCheckboxChecked ? setFilteredMovies(shortFilm) : setFilteredMovies(movie);
    isCheckboxChecked
      ? savedDataLocalStorage(shortFilm)
      : savedDataLocalStorage(movie);

    handleSearchForm(movie);
    if (isCheckboxChecked && shortFilm.length === 0) {
      handleSearchForm(shortFilm);
    }
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
    if (isValidForm) {
      setMessageErrForm(<Preloader />);
      saerchMovies();
    } else {
    }
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
          handleFilterCheckbox={handleFilterCheckbox}
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        ></FilterCheckbox>
        <MoviesCardList
          messageErrForm={messageErrForm}
          foundMovies={filteredMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        ></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
