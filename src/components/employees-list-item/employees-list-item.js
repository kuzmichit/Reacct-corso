import './employees-list-item.css';

const EmployeesListItem = (props) => {

  const { name, salary, onDelete, onToggleRise, onToggleIncrease, increase, rise } = props;

  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ' increase';
  }
  if (rise) {
    classNames += ' like';
  }

  return ( 
    <li className = { classNames }>
      <span className = { 'list-group-item-label' }
        onClick = { onToggleRise }> {name} </span>
      <input type = "text"	
        className = "list-group-item-input"
        defaultValue = { salary + '$' } />
      <div className = "d-flex justify-content-center align-items-center">
        <button className = "btn-cookie btn-sm"
          onClick = { onToggleIncrease }
          type = "button">
          <i className = "fa-solid fa-cookie"></i>
        </button>
        <button className = "btn-trash btn-sm" type = "button" onClick = { () => onDelete() } >
          <i className = "fa-solid fa-trash"></i>
        </button>
        <i className = "fa-solid fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
