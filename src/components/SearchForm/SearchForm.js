import {useState} from 'react';
import searchIcon from '../../images/logo/icon-find.svg';

function SearchForm({
  formValue,
  setFormValue,
  setIsValidForm,
  handleFindMovies,
  handleSubmit
}) {
  const [validSearchForm, setValidSearchForm] = useState(false);


  return (
    <section className='search'>
      <form
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
          pattern='\S(.*\S)?'
          title='Текст поиска'
          type='text'
          minLength={1}
          className='search__input'
          placeholder='Фильм'
          onChange={(e) => {
            setValidSearchForm(e.target.validity.valid);
            setFormValue(e.target.value);
          }}
          value={formValue ?? ''}
        />
        <button
          onClick={(e) => {
            validSearchForm
              ? handleFindMovies()
              : setIsValidForm('Нужно ввести ключевое слово');
          }}
          className='search__find-button'
        />
      </form>
    </section>
  );
}
export default SearchForm;
