import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(data) {
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
      </div>
      <div className="expense-item__price">₹ {data.amount}</div>
    </div>
  );
}

export default ExpenseItem;
