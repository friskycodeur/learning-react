import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(data) {
  const [title, setTitle] = useState(data.title);

  function changeTitleHandler() {
    setTitle("Updated!");
    console.log(title);
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">₹ {data.amount}</div>
      <button onClick={changeTitleHandler} className="expense-item__btn">
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
