import searchIcon from '../../images/logo/icon-find.svg';

function SearchForm({formValue, setFormValue, handleSubmit, handleChange}) {
  return (
    <section className='search'>
      <form onSubmit={handleSubmit} className='search__form'>
        <img
          src={searchIcon}
          alt='иконка поиска'
          className='search__iсon-find'
        />
        <input
          name='text'
          autoComplete='name'
          id='text'
          type='text'
          className='search__input'
          placeholder='Фильм'
          value={formValue ?? ''}
          onChange={handleChange}
        />
        <button className='search__find-button' />
      </form>
    </section>
  );
}
export default SearchForm;
