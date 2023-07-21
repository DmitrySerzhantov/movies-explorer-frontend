import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Movies() {
  return (
    <section className='movies'>
      <Header></Header>
      <div className='container'>
        <SearchForm></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList></MoviesCardList>
      </div>
      <Footer></Footer>
    </section>
  );
}
export default Movies;
