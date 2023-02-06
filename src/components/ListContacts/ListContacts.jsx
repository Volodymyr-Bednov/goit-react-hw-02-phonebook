import { ItemContact } from './ItemContact';
export const ListContacts = ({ dataList }) => {
  //console.log(dataList);
  return (
    <ul>
      {dataList.map(item => (
        <ItemContact key={item.id} dataItem={item} />
      ))}
      {/* <ItemContact /> */}
    </ul>
  );
};
