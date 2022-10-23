import './employees-add-form.css';

const EmployeesAddForm = () => {
  return (
    <div className='app-add-form'>
      <h3>Aggiungere un lavoratore</h3>
      <form className="add-form d-flex">
        <input className="form-control new-post-label"
          placeholder='Nome del lavoratore'
          type='text'>
        </input>
        <input className="form-control new-post-label"
          placeholder='Lo stipendio'
          type='text'>
        </input>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
