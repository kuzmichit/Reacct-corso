import './employees-add-form.css';
import {Component} from 'react';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameTest: '',
      salary: false
    };
  }

  onValueChange = (e) => {
  
    this.setState( {
      [e.target.name]: e.target.value
    } );
  };
  render() {

    const {nameTest, salary} = this.state;
    
    return (
      <div className = 'app-add-form'>
        <h3>Aggiungere un lavoratore</h3>
        <form className = "add-form d-flex" >
          <input className = "form-control new-post-label"
            placeholder = 'Nome del lavoratore'
            type = 'text'
            name = 'nameTest'
            required
            value = { nameTest }
            onChange = { this.onValueChange } >
          </input>

          <input className = "form-control new-post-label"
            placeholder = 'Lo stipendio'
            type = 'number'
            required
            value = { salary }
            name = { 'salary' }
            onChange = { this.onValueChange } >
          </input>

          <button 
            type = 'button'
            className = 'btn btn-outline-light'
            onClick = { () => this.props.onAdd(name, salary) } >
							Aggiungere
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
