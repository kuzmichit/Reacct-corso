import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
  return(
    <ul className="app-list list-group">
      <EmployeesListItem name={'Mario R.'} salary={1500}/>
      <EmployeesListItem name={'Simone T.'} salary={1700}/>
      <EmployeesListItem name={'Fabrizio R.'} salary={1200}/>
    </ul>
  );
};

export default EmployeesList;