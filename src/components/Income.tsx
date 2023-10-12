import React, { useState } from "react";
import App from "../App.css";

export default function Income() {
  type User = {
    salary: string;
    amount: number;
    date: Date;
  };
  const [userInput, setUserInput] = useState<User>({
    salary: "",
    amount: 0,
    date: new Date(),
  });

  const [userInfo, setUserInfo] = useState<User[]>([]);
  //   Income
  function getIncomeSource(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, salary: e.target.value });
  }

  // Amount
  function getAmountOfIncome(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput({ ...userInput, amount: Number(e.target.value) });
  }

  // Date
  function getDateOfIncome(e: React.ChangeEvent<HTMLInputElement>) {
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
          <label>Income source</label>
          <input type="text" placeholder="Salary" onChange={getIncomeSource} />
          <label>Amount of income</label>
          <input type="number" onChange={getAmountOfIncome} />
          <label>Date of income</label>
          <input type="date" onChange={getDateOfIncome} />
          <button>Add income</button>
          {userInfo.map((user) => {
            return (
              <ul>
                <li>{`${user.salary}: ${user.amount}EUR on ${user.date}`}</li>
              </ul>
            );
          })}
        </form>
      </div>
    </div>
  );
}
