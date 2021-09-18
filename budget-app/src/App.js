import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Swiggy Instamart",
    amount: 150,
    date: new Date(2021, 8, 6),
  },
  { id: "e2", title: "Burger", amount: 50, date: new Date(2021, 8, 6) },
  { id: "e3", title: "Wifi", amount: 200, date: new Date(2020, 8, 9) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
