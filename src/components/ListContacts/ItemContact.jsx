export const ItemContact = ({
  dataItem: { id, name, number },
  onDeleteItemHandler,
}) => {
  //console.log(name);
  return (
    <li>
      {name}: {number}: {id}
      <button data-id={id} type="button" onClick={onDeleteItemHandler}>
        Delete
      </button>
    </li>
  );
};
