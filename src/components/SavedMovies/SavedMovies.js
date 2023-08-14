import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';

function SavedMovies({arrSavedMovies, setArrSavedMovies, getSavedMovies}) {
  const [formValue, setFormValue] = useState('');
  const [isValidForm, setIsValidForm] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [messageErrForm, setMessageErrForm] = useState('');
  const [foundMovies, setFoundMovies] = useState(arrSavedMovies);

  const handleSearchForm = (movie) => {
    if (movie.length === 0) {
      setMessageErrForm('Ничего не найдено');
    } else {
      setMessageErrForm('');
    }
  };

  const handleFindMovies = () => {
    const movie = arrSavedMovies.filter((e) => {
      return (
        e.nameRU.toLowerCase().includes(formValue.toLowerCase()) ||
        e.nameEN.toLowerCase().includes(formValue.toLowerCase())
      );
    });

    const shortFilm = movie.filter((e) => {
      return e.duration <= 40;
    });

    isCheckboxChecked ? setFoundMovies(shortFilm) : setFoundMovies(movie);
    isCheckboxChecked ? handleSearchForm(shortFilm) : handleSearchForm(movie);
  };

  useEffect(() => {
    getSavedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxChecked]);

  useEffect(() => {
    setFoundMovies(arrSavedMovies);
  }, [arrSavedMovies]);
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
          foundMovies={foundMovies}
          arrSavedMovies={arrSavedMovies}
          setArrSavedMovies={setArrSavedMovies}
        />
      </div>
    </section>
  );
}
export default SavedMovies;
