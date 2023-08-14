import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';
import Preloader from '../Preloader/Preloader';

function SavedMovies({arrSavedMovies, setArrSavedMovies}) {
  const [formValue, setFormValue] = useState('');
  const [isValidForm, setIsValidForm] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [messageErrForm, setMessageErrForm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(arrSavedMovies);

  const handleSearchForm = (movie) => {
    if (movie.length === 0) {
      setMessageErrForm('Ничего не найдено');
    } else {
      setMessageErrForm('');
    }
  };

  function savedDataLocalStorage(movie) {
    const lastSearchSavedMovies = {
      movie,
      formValue,
      isCheckboxChecked,
      isValidForm,
    };
    localStorage.setItem(
      'lastSearchSavedMovies',
      JSON.stringify(lastSearchSavedMovies)
    );
  }

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

    handleSearchForm(movie);
    if (isCheckboxChecked && shortFilm.length === 0) {
      handleSearchForm(shortFilm);
    }

    isCheckboxChecked ? setFilteredMovies(shortFilm) : setFilteredMovies(movie);
    isCheckboxChecked
      ? savedDataLocalStorage(shortFilm)
      : savedDataLocalStorage(movie);
  };

  const saerchMovies = () => {
    if (isValidForm) {
      filterMovies(arrSavedMovies, isCheckboxChecked);
    }
  };

  const handleFilterCheckbox = (e) => {
    setIsCheckboxChecked(e.target.checked);
    if (filteredMovies.length !== 0) {
      filterMovies(filteredMovies, e.target.checked);
    }
    if (true) {
      filterMovies(arrSavedMovies, e.target.checked);
    }
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('lastSearchSavedMovies')) !== null &&
      localStorage.getItem('LoggedIn')
    ) {
      setFormValue(
        JSON.parse(localStorage.getItem('lastSearchSavedMovies')).formValue
      );
      setIsCheckboxChecked(
        JSON.parse(localStorage.getItem('lastSearchSavedMovies'))
          .isCheckboxChecked
      );
      setFilteredMovies(
        JSON.parse(localStorage.getItem('lastSearchSavedMovies')).movie
      );
      setIsValidForm(
        JSON.parse(localStorage.getItem('lastSearchSavedMovies')).isValidForm
      );
    }
  }, []);

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
      setMessageErrForm('Нужно ввести ключевое слово');
    }
  }
  return (
    <section className='movies'>
      <div className='movies__container'>
        <SearchForm
          handleChange={handleChange}
          formValue={formValue}
          setFormValue={setFormValue}
          handleSubmit={handleSubmit}
        />
        <FilterCheckbox
          handleFilterCheckbox={handleFilterCheckbox}
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        />
        <MoviesCardList
          messageErrForm={messageErrForm}
          foundMovies={filteredMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        />
      </div>
    </section>
  );
}
export default SavedMovies;
