export const Firter = ({ valueFilter, onFilterChahge }) => {
  return (
    <div>
      <label htmlFor="fipter">Find contacts by name</label>
      <input
        type="text"
        name="fipter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={valueFilter}
        onChange={onFilterChahge}
      ></input>
    </div>
  );
};
