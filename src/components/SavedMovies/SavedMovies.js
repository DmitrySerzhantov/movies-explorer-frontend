import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies() {
  return (
    <section className='movies'>
      <div className='movies__container'>
        <SearchForm></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList></MoviesCardList>
      </div>
    </section>
  );
}
export default SavedMovies;
