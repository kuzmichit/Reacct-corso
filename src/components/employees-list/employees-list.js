import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ( { data, onDelete, onToggleIncrease, onToggleRise } ) => {

  const elements = data.map(item => {
    const { id, ...restItem } = item;
   
    return (
      <EmployeesListItem
        key = { id }
        { ...restItem }
        onDelete = { () => onDelete(id) }
        onToggleIncrease = { () => onToggleIncrease(id) }
        onToggleRise = { () => onToggleRise(id) }
      />
    );
  } );

  return (
    <ul className = "app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;