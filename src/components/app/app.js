import {Component} from 'react';
import _ from 'lodash';

import './app.css';
import '../search-panel/search-panel.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name:'Mario R.', salary:1500, increase: false, rise: true, id: 1},
        {name:'Simone T.', salary:800, increase: true, rise: false, id: 2},
        {name:'Fabrizio R.',salary:1200, increase: false, rise: false, id: 3} 
      ],
      employees: 4,
    };

    this.currentId = _.uniqueId;
  }

  onDelete = (id) => {

    this.setState( ( {data} ) => {
      const newArr = data.filter(item => id !== item.id);

      return {
        data: newArr
      };
    } );
  }; 

  addEmployee = (name, salary) => { 
    if(!/[a-z]{3,}/.test(name) || !/\d{3,}/.test(salary) ) {
      alert('Inserire il valore più lingo');
      // debugger;

      return ;
    }     
    this.setState( ( {data} ) => {
      const newEmployee = [...data, {name, salary, increase: false, id: this.currentId('a')} ];
			
      return {
        data: newEmployee
      };
    } );
  };

  onToggleIncrease = (id) => {

    this.setState( ( { data } ) => {

      const newData = data.map(item => {
        if(item.id === id) return {...item, increase: !item['increase']} ;

        return item;
      } );
      
      return {
        data: newData
      };
    } );

  };

  onToggleRise = (id) => {
    this.setState( ( {data} ) => {

      const newData = data.map(item => {
        if(item.id === id) return {...item, rise: !item['rise'] };

        return item;
      } );

      return {
        data: newData
      };
    } );
  };

  render() {
	
    const {data} = this.state;
    const employees = data.length; 
    const employeesToRise = data.filter(item => item.increase).length;
    console.log(employeesToRise);

    return (
      <div className = 'app'>
        <AppInfo employees = { employees } 
          employeesToRise = { employeesToRise }/>
	
        <div className = "search-panel">
          <SearchPanel/>
          <AppFilter/>
          <EmployeesList 
            data = { this.state.data }
            onDelete = { this.onDelete }
            onToggleIncrease = { this.onToggleIncrease }
            onToggleRise = { this.onToggleRise } />
						
          <EmployeesAddForm
            onAdd = { this.addEmployee }/>
        </div>
      </div>
    );
  }
}

export default App;