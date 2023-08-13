import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useCallback, useEffect, useState} from 'react';

function SavedMovies({arrSavedMovies, setArrSavedMovies, getSavedMovies}) {
  const [formValue, setFormValue] = useState('');
  const [isValidForm, setIsValidForm] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [messageErrForm, setMessageErrForm] = useState('');

  useEffect(() => {
    getSavedMovies();
  }, [getSavedMovies]);
  const handleSearchForm = useCallback((movie) => {
    if (movie.length === 0) {
      setIsValidForm('Ничего не найдено');
      getSavedMovies();
    } else {
      setIsValidForm('');
    }
  });
  
  const handleFindMovies = useCallback(() => {
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
  }, [
    arrSavedMovies,
    formValue,
    handleSearchForm,
    isCheckboxChecked,
    setArrSavedMovies,
  ]);

  useEffect(() => {
    handleFindMovies();
  }, [isCheckboxChecked]);

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
      handleFindMovies();
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
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        />
        <MoviesCardList
          messageErrForm={messageErrForm}
          foundMovies={arrSavedMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        />
      </div>
    </section>
  );
}
export default SavedMovies;
