import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 443.4,
      date: new Date(2021, 4, 3),
    },
    {
      title: "Life Insurance",
      amount: 443.4,
      date: new Date(2021, 5, 3),
    },
    {
      title: "Bike Insurance",
      amount: 443.4,
      date: new Date(2021, 6, 3),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
