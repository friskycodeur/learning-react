import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";
import { useState } from "react";
import "./Expenses.css";
function Expenses(data) {
  const [selectedYear, setFilterYear] = useState("2020");
  const filterHandler = (inputFilterDate) => {
    setFilterYear(inputFilterDate);
  };

  const filteredExpenses = data.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
