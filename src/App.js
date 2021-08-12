import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSE_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 100,
    date: new Date(2021, 7, 5),
  },
  {
    id: 2,
    title: "Food",
    amount: 45,
    date: new Date(2021, 7, 1),
  },
  {
    id: 3,
    title: "MVV Ticket",
    amount: 60,
    date: new Date(2021, 6, 28),
  },
  {
    id: 4,
    title: "New Laptop",
    amount: 2499,
    date: new Date(2021, 7, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSE_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello React"),
  //   React.createElement(Expenses, { items: expenses }),
  //   React.createElement(NewExpense, {})
  // );

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </header>
    </div>
  );
};

export default App;
