import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ( { data } ) => {

  const elements = data.map(item => {
    const { id, ...restItem } = item;
	
	const newData = {};
	newData = data.filter(item => )
    return (
      <EmployeesListItem
        key = { id }
        { ...restItem }
        onDelete = { () => onDelete(id) } />
    );
  } );

  return (
    <ul className = "app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;