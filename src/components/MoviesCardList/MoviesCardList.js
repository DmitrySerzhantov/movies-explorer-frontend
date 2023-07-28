import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies-card'>
      <ul className='movies-card__list'>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={true} userId={true} ></MoviesCard>
        <MoviesCard owner={true} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={true} userId={true} ></MoviesCard>
        <MoviesCard owner={true} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
        <MoviesCard owner={false} userId={true} ></MoviesCard>
      </ul>

      <button className='movies-card__button'>Ещё</button>
    </section>
  );
}
export default MoviesCardList;
