import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
	
  constructor(props) {
    super(props),
    this.state = {
      increase: false,
      like: false,

    };
  }

  onIncrease = () => {
    this.setState( ( {increase} ) => ( {
      increase: !increase
    } ) );
  };
	
  onNameClick = () => {
    this.setState( ( {like} ) => ( {
      like: !like
    } ) );

  };

  render() {
    const {name, salary} = this.props;
    const {increase, like} = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';
    if(increase) {
      classNames += ' increase';
    }
    if(like) {
      classNames += ' like';
    }

    return (
      <li className= {classNames}>
        <span className= { 'list-group-item-label' }
          onClick={this.onNameClick}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm"
            onClick={this.onIncrease}
            type="button">
            <i className="fa-solid fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm"
            type="button">
            <i className="fa-solid fa-trash"></i>
          </button>
          <i className="fa-solid fa-star"></i>
        </div>
      </li>
    );
  }
}
export default EmployeesListItem;
