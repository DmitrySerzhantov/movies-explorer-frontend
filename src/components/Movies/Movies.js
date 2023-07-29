import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function Movies() {
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList></MoviesCardList>
      </div>
    </main>
  );
}
export default Movies;
