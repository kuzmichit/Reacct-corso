import './app-info.css';

const AppInfo = (props) => {

  return (
    <div className = "app-info">
      <h1>Registro dei lavoratori di Elettrolito</h1>
      <h2>Quantità dei lavoratori { props.employees }</h2>
      <h2>Da premiare { props.employeesToRise }</h2>
    </div>
  );
};

export default AppInfo;