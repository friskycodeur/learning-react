import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { title: "Swiggy Instamart", amount: 150, date: new Date(2021, 8, 6) },
    { title: "Burger", amount: 50, date: new Date(2021, 8, 6) },
    { title: "Wifi", amount: 200, date: new Date(2021, 8, 9) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
