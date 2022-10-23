import './employees-list-item.css';

const EmployeesListItem = ( {name, salary} ) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm"
          type="button">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm"
          type="button">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fas-star"></i>
      </div>
    </li>
  );
};
export default EmployeesListItem;
