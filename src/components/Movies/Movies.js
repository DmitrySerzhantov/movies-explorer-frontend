import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {useState} from 'react';
import {findMovies} from '../../utils/MoviesApi';
function Movies() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isValidForm, setIsValidForm] = useState(null);

  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm
          setFoundMovies={setFoundMovies}
          setIsValidForm={setIsValidForm}
          findMovies={findMovies}
        ></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList
          isValidForm={isValidForm}
          foundMovies={foundMovies}
        ></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
