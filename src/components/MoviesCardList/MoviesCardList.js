import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  let location = useLocation();
  return (
    <section className='movies-card'>
      <ul className='movies-card__list'>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={true} userId={true}></MoviesCard>
        <MoviesCard owner={true} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={true} userId={true}></MoviesCard>
        <MoviesCard owner={true} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
        <MoviesCard owner={false} userId={true}></MoviesCard>
      </ul>

      <button
        className={
          location.pathname === '/movies'
            ? 'movies-card__button'
            : 'movies-card__button_visible_none'
        }
      >
        Ещё
      </button>
    </section>
  );
}
export default MoviesCardList;
