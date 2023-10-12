import React, { useState } from "react";
import App from "../App.css";

export default function Income() {
  type User = {
    source: string;
    amount: number;
    date: Date;
  };
  const [userInput, setUserInput] = useState<User>({
    source: "",
    amount: 0,
    date: new Date(),
  });

  const [userInfo, setUserInfo] = useState<User[]>([]);
  //   Income
  function getExpenseSource(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, source: e.target.value });
  }

  // Amount
  function getAmountOfExpense(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, amount: Number(e.target.value) });
  }

  // Date
  function getDateOfExpense(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, date: new Date(e.target.value) });
  }
  //   console.log(userInput);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUserInfo([...userInfo, userInput]);
  }
  console.log(userInfo);
  return (
    <div>
      <div>
        <form className="form" onSubmit={onSubmitHandler}>
          <label>Expense source</label>
          <input
            type="text"
            placeholder="Electricity bill"
            onChange={getExpenseSource}
          />
          <label>Amount of expense</label>
          <input type="number" onChange={getAmountOfExpense} />
          <label>Date of expense</label>
          <input type="date" onChange={getDateOfExpense} />
          <button>Add income</button>
          {userInfo.map((user) => {
            return (
              <ul>
                <li>{`${user.source}: ${user.amount}EUR on ${user.date}`}</li>
              </ul>
            );
          })}
        </form>
      </div>
    </div>
  );
}
