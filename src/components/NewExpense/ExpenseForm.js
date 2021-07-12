import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div class="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div class="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2021-05-30" />
        </div>

        <div class="new-expense__action">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
