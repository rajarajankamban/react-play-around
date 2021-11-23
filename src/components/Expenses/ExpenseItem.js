import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log('Expense Item Created !');
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle('Updated');
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={changeTitle}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
