import './app.css';
import '../search-panel/search-panel.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';

const app = () => {
  return (
    <div className='app'>
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
      </div>
    </div>
  );
};

export default app;