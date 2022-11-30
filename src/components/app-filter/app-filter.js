import './app-filter.css';

const AppFilter = () => {
  return(
    <div className = 'btn-group'>
      <button className = "btn-light btn" type = { 'button' }>Tutti i lavoratori</button>
      <button className = "btn btn-outline-light" type = 'button'>Da alzare il livello</button>
      <button className = "btn btn-outline-light" type = 'button'>Stipendio piu alto di</button>
    </div>
  );
};

export default AppFilter;