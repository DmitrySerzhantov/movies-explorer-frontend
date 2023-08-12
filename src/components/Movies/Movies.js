import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useContext, useEffect, useState} from 'react';
import {findMovies} from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
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
  const currentUser = useContext(CurrentUserContext);
  const [isValidForm, setIsValidForm] = useState(null);

  function savedDataLocalStorage(movie) {
    const lastSearch = {movie, formValue, isCheckboxChecked};
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
      setFoundMovies(JSON.parse(localStorage.getItem('lastSearch')).movie);
    }
    getSavedMovies();
  }, [currentUser._id, setArrSavedMovies, setFoundMovies, getSavedMovies]);

  function handleFindMovies() {
    findMovies()
      .then((res) => {
        const movie = res.filter((e) => {
          return (
            e.nameRU.toLowerCase().includes(formValue.toLowerCase()) ||
            e.nameEN.toLowerCase().includes(formValue.toLowerCase())
          );
        });
        const shortFilm = movie.filter((e) => {
          return e.duration <= 40;
        });

        isCheckboxChecked ? setFoundMovies(shortFilm) : setFoundMovies(movie);

        handleSearchForm(movie);
        savedDataLocalStorage(movie);
      })
      .catch((err) => {
        console.log(err);
        setIsValidForm(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      });
  }

  function handleSearchForm(movie) {
    if (movie.length === 0) {
      setIsValidForm('Ничего не найдено');
    } else {
      setIsValidForm('');
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsValidForm(<Preloader />);
  }
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          handleFindMovies={handleFindMovies}
          setFoundMovies={setFoundMovies}
          setIsValidForm={setIsValidForm}
          findMovies={findMovies}
          formValue={formValue}
          setFormValue={setFormValue}
          savedDataLocalStorage={savedDataLocalStorage}
          handleSubmit={handleSubmit}
        ></SearchForm>
        <FilterCheckbox
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        ></FilterCheckbox>
        <MoviesCardList
          isValidForm={isValidForm}
          foundMovies={foundMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        ></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
