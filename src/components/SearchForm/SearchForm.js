import searchIcon from '../../images/logo/icon-find.svg';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <img
          src={searchIcon}
          alt='иконка поиска'
          className='search__iсon-find'
        />
        <input className='search__input' placeholder='Фильм' />
        <button className='search__find-button' />
      </form>
    </section>
  );
}
export default SearchForm;
