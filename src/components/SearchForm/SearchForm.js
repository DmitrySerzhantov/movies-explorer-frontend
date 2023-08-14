import searchIcon from '../../images/logo/icon-find.svg';

function SearchForm({formValue, setFormValue, handleSubmit, handleChange}) {
  return (
    <section className='search'>
      <form
        noValidate
        onChange={(v) => {
          setFormValue(v.target.value);
        }}
        onSubmit={handleSubmit}
        className='search__form'
      >
        <img
          src={searchIcon}
          alt='иконка поиска'
          className='search__iсon-find'
        />
        <input
          required
          name='text'
          autoComplete='name'
          id='text'
          type='text'
          minLength={1}
          className='search__input'
          placeholder='Фильм'
          onChange={(e) => handleChange(e)}
          value={formValue ?? ''}
        />
        <button className='search__find-button' />
      </form>
    </section>
  );
}
export default SearchForm;
