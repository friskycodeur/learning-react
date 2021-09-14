import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Swiggy Instamart", amount: 150, date: new Date(2021, 8, 6) },
    { title: "Burger", amount: 50, date: new Date(2021, 8, 6) },
    { title: "Wifi", amount: 200, date: new Date(2021, 8, 9) },
  ];

  return (
    <div>
      <h5>Ignore me!</h5>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
