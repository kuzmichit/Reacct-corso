import './app.css';
import '../search-panel/search-panel.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';

const app = () => {
  return (
    <div className='app'>
      <div className="search-panel">
        <SearchPanel/>
        <AppInfo/>
        <AppFilter/>
        <EmployeesList/>
      </div>
    </div>
  );
};

export default app;