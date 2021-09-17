import ExpenseItem from "./ExpenseItem";
function Expenses(data) {
  return (
    <div>
      <ExpenseItem
        title={data.item[0].title}
        amount={data.item[0].amount}
        date={data.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.item[1].title}
        amount={data.item[1].amount}
        date={data.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.item[2].title}
        amount={data.item[2].amount}
        date={data.item[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
