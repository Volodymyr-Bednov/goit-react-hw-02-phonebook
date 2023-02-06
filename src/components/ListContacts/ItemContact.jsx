export const ItemContact = ({ dataItem: { name, number } }) => {
  //console.log(name);
  return (
    <li>
      {name}: {number}
    </li>
  );
};
