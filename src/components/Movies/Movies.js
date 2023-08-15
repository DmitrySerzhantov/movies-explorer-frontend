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
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [messageErrForm, setMessageErrForm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));

  useEffect(() => {
    loadingData();
    getSavedMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function savedDataLocalStorage(
    movie,
    shortFilm,
    isCheckboxChecked,
    formValue,
    isValidForm
  ) {
    const lastSearch = {
      movie,
      shortFilm,
      isCheckboxChecked,
      formValue,
      isValidForm,
    };
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
  }

  const loadingData = () => {
    if (lastSearch !== null) {
      filterMovies(
        lastSearch.movie,

        lastSearch.isCheckboxChecked,
        lastSearch.formValue,
        lastSearch.isValidForm
      );
    }
  };

  function handleFindMovies() {
    if (foundMovies.length <= 0) {
      findMovies()
        .then((movies) => {
          setFoundMovies(movies);
          handleSearchForm(movies);
          filterMovies(movies, isCheckboxChecked, formValue, isValidForm);
        })
        .catch((err) => {
          console.log(err);
          setMessageErrForm(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        });
    } else {
      filterMovies(foundMovies, isCheckboxChecked, formValue, isValidForm);
    }
  }

  const handleFilterCheckbox = (e) => {
    setIsCheckboxChecked(e.target.checked);
    e.target.checked
      ? handleSearchForm(lastSearch.shortFilm)
      : handleSearchForm(lastSearch.movie);

    if (lastSearch.movie.length > 0) {
      isCheckboxChecked
        ? setFilteredMovies(lastSearch.movie)
        : setFilteredMovies(lastSearch.shortFilm);
      savedDataLocalStorage(
        lastSearch.movie,
        lastSearch.shortFilm,
        e.target.checked,
        formValue,
        isValidForm
      );
    }
  };

  const filterMovies = (movies, isChecked, valueForm, isValidForm) => {
    setMessageErrForm(<Preloader />);
    const movie = movies.filter((e) => {
      return (
        e.nameRU.toLowerCase().includes(valueForm.toLowerCase()) ||
        e.nameEN.toLowerCase().includes(valueForm.toLowerCase())
      );
    });

    const shortFilm = movie.filter((e) => {
      return e.duration <= 40;
    });

    isChecked ? setFilteredMovies(shortFilm) : setFilteredMovies(movie);

    setFormValue(valueForm);
    setIsCheckboxChecked(isChecked);
    setIsValidForm(isValidForm);
    savedDataLocalStorage(movie, shortFilm, isChecked, valueForm, isValidForm);
    isChecked ? handleSearchForm(shortFilm) : handleSearchForm(movie);
  };

  function handleSearchForm(movie) {
    if (movie.length === 0) {
      setMessageErrForm('Ничего не найдено');
    } else {
      setMessageErrForm('');
    }
  }

  const handleChange = (e) => {
    setFormValue(e.target.value);
    if (e.target.value.length > 0) {
      setIsValidForm(true);
      setMessageErrForm('');
      setFormValue(e.target.value);
    } else {
      setIsValidForm(false);
    }
  };

  const formValidation = (e) => {
    if (e.target.text.value.length > 0) {
      setIsValidForm(true);
      setMessageErrForm('');
      setFormValue(e.target.text.value);
    } else {
      setMessageErrForm('Нужно ввести ключевое слово');
      setIsValidForm(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    formValidation(e);
    if (isValidForm) {
      setMessageErrForm(<Preloader />);
      handleFindMovies();
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
