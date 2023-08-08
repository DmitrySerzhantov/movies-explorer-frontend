import {useState} from 'react';
import searchIcon from '../../images/logo/icon-find.svg';
import Preloader from '../Preloader/Preloader';

function SearchForm({
  formValue,
  setFormValue,
  findMovies,
  setIsValidForm,
  setFoundMovies,
  savedDataLocalStorage,
}) {
  const [validSearchForm, setValidSearchForm] = useState(false);

  function handleSearchForm(movie) {
    if (movie.length === 0) {
      setIsValidForm('Ничего не найдено');
    } else {
      setIsValidForm('');
    }
  }

  function handleFindMovies() {
    findMovies()
      .then((res) => {
        const movie = res.filter((e) => {
          return e.nameRU.toLowerCase().includes(formValue.toLowerCase());
        });
        setFoundMovies(movie);
        handleSearchForm(movie);
        savedDataLocalStorage(movie);
      })
      .catch((err) => {
        console.log(err);
        setIsValidForm(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsValidForm(<Preloader />);
  }
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
