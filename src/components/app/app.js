import './app.css';
import '../search-panel/search-panel.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const data = [
  {name:'Mario R.', salary:1500, increase: false, id: 1},
  {name:'Simone T.', salary:800, increase: true, id: 2},
  {name:'Fabrizio R.',salary:1200, increase: false, id: 3} 
]; 

const app = () => {
  return (
    <div className='app'>
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
        <EmployeesList data={data}/>

        <EmployeesAddForm/>
      </div>
    </div>
  );
};

export default app;