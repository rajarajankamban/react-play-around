import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showExpense, setShowExpense] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toogleShowExpenseHandler = () => {
    setShowExpense((_showExpense) => !_showExpense);
  };

  return (
    <div className="new-expense">
      {!showExpense && (
        <button onClick={toogleShowExpenseHandler}>Add Expense</button>
      )}
      {showExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          toogleShowExpenseHandler={toogleShowExpenseHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
