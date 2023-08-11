import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';

function SavedMovies({
  arrSavedMovies,
  setArrSavedMovies,
  getSavedMovies,
  setFoundMovies,
}) {
  const [formValue, setFormValue] = useState('');
  const [isValidForm, setIsValidForm] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies, isCheckboxChecked]);

  function handleFindMovies() {
    const movie = arrSavedMovies.filter((e) => {
      return (
        e.nameRU.toLowerCase().includes(formValue.toLowerCase()) ||
        e.nameEN.toLowerCase().includes(formValue.toLowerCase())
      );
    });
    const shortFilm = movie.filter((e) => {
      return e.duration <= 40;
    });

    isCheckboxChecked ? setArrSavedMovies(shortFilm) : setArrSavedMovies(movie);

    handleSearchForm(movie);
  }

  function handleSearchForm(movie) {
    if (movie.length === 0) {
      setIsValidForm('Ничего не найдено');
      getSavedMovies();
    } else {
      setIsValidForm('');
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='movies'>
      <div className='movies__container'>
        <SearchForm
          handleFindMovies={handleFindMovies}
          setIsValidForm={setIsValidForm}
          formValue={formValue}
          setFormValue={setFormValue}
          findMovies={getSavedMovies}
          handleSubmit={handleSubmit}
        />
        <FilterCheckbox
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        />
        <MoviesCardList
          isValidForm={isValidForm}
          foundMovies={arrSavedMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        />
      </div>
    </section>
  );
}
export default SavedMovies;
