import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useEffect, useState} from 'react';
import {findMovies} from '../../utils/MoviesApi';
function Movies() {
  const [formValue, setFormValue] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isValidForm, setIsValidForm] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  function savedDataLocalStorage(movie) {
    const lastSearch = {movie, formValue, isCheckboxChecked};
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
  }
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('lastSearch')) !== null) {
      setFormValue(JSON.parse(localStorage.getItem('lastSearch')).formValue);
      setIsCheckboxChecked(
        JSON.parse(localStorage.getItem('lastSearch')).isCheckboxChecked
      );
      setFoundMovies(JSON.parse(localStorage.getItem('lastSearch')).movie);
    }
  }, []);
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          setFoundMovies={setFoundMovies}
          setIsValidForm={setIsValidForm}
          findMovies={findMovies}
          formValue={formValue}
          setFormValue={setFormValue}
          savedDataLocalStorage={savedDataLocalStorage}
        ></SearchForm>
        <FilterCheckbox
          setIsCheckboxChecked={setIsCheckboxChecked}
          isCheckboxChecked={isCheckboxChecked}
        ></FilterCheckbox>
        <MoviesCardList
          isValidForm={isValidForm}
          foundMovies={foundMovies}
        ></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
