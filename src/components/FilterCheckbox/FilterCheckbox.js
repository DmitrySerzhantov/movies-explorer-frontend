function FilterCheckbox({
  isCheckboxChecked,
  setIsCheckboxChecked,
  handleFilterCheckbox,
}) {
  return (
    <section className='filter'>
      <input
        onChange={(e) => {
          setIsCheckboxChecked(e.currentTarget.checked);
        }}
        onClick={handleFilterCheckbox}
        className='filter__checkbox'
        id='checkbox'
        type='checkbox'
        checked={isCheckboxChecked ?? false}
      />
      <label className='filter__label' htmlFor='checkbox'>
        Короткометражки
      </label>
    </section>
  );
}
export default FilterCheckbox;
