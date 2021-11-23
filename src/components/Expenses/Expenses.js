import { useState } from 'react';

import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';

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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChange={changeFilter} />
      {/* {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (

      )} */}
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
