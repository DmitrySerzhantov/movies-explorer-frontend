import {useNavigate} from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <section className='not-found'>
      <h1 className='not-found__status'>404</h1>
      <span className='not-found__text'>Страница не найдена</span>
      <button className='not-found__button-back' onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
export default NotFound;
