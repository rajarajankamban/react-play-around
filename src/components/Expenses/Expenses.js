import { useState } from 'react';

import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js';

const Expenses = (props) => {
  const [year, setYear] = useState('2021'); // setting default value
  const filterExpenses = (_year) => {
    return props.expenses.filter(
      (expense) => new Date(expense.date).getFullYear().toString() === _year
    );
  };
  const expenses = filterExpenses(year);
  const changeFilter = (_year) => {
    setYear(_year);
  };

  let expensesContent = <p>No expenses found.</p>;
  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChange={changeFilter} />
      {/* {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (

      )} */}
      {expensesContent}
    </Card>
  );
};

export default Expenses;
