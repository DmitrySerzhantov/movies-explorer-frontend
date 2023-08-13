function FilterCheckbox({isCheckboxChecked, setIsCheckboxChecked}) {
  return (
    <section className='filter'>
      <input
        onChange={(e) => {
          setIsCheckboxChecked(e.currentTarget.checked);
        }}
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
