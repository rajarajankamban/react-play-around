import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length <= 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }
  return props.items.map((expense) => (
    <ul className="expenses-list" key={expense.id}>
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
};

export default ExpensesList;
