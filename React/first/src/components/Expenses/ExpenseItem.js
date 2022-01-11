import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {useState} from 'react';

function ExpenseItem(props) {
  // useState();

  // this useState is a hook and 
  // is a function that detects the changes
  // when the function is called
  const [title, setTitle] = useState(props.title);

  // let title = props.title;

  const clickHandler = () => {
    setTitle('Updated');
    // console.log("I was touched!!!");
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Rs. {props.amount}</div>
      </div>
      <button onClick={clickHandler} > Change Title</button>
    </Card>
  );
}

export default ExpenseItem;