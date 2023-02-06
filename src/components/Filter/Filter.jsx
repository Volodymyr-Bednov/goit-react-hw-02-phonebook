export const Firter = () => {
  return (
    <div>
      <label htmlFor="fipter">Find contacts by name</label>
      <input
        type="text"
        name="fipter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      ></input>
    </div>
  );
};
