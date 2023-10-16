import React, { useState } from "react";
import { User } from "../App";

type Prop = {
  userInfo: User[];
  setUserInfo: React.Dispatch<React.SetStateAction<User[]>>;
  getBalanceIncome: (amount: number) => void;
};

export default function Income(prop: Prop) {
  const [userIncome, setUserIncome] = useState<User>({
    source: "",
    amount: 0,
    date: "",
  });

  // ==================================

  function getIncome(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserIncome({ ...userIncome, [name]: value });
  }
  function getIncomeAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setUserIncome({ ...userIncome, amount: Number(e.target.value) });
  }
  //   console.log(userInput);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userIncome.source && userIncome.amount && userIncome.date) {
      prop.setUserInfo([...prop.userInfo, userIncome]);
      prop.getBalanceIncome(userIncome.amount);
    }
  }
  // console.log(userInfo);
  return (
    <div>
      <div>
        <form className="form" onSubmit={onSubmitHandler}>
          <label>Income source</label>
          <input
            type="text"
            onChange={getIncome}
            name="source"
            id="source"
            value={userIncome.source}
          />
          <label>Amount of income</label>
          <input
            type="number"
            onChange={getIncomeAmount}
            name="amount"
            id="amount"
            value={userIncome.amount}
          />
          <label>Date of income</label>
          <input
            type="date"
            onChange={getIncome}
            name="date"
            id="date"
            value={userIncome.date}
          />
          <button>Add income</button>
        </form>
        <ul>
          {prop.userInfo.length > 0 ? (
            prop.userInfo.map((income, index) => (
              // <li
              //   // key={index}
              // >{`${Income.source}: ${Income.amount}EUR on ${Income.date}`}</li>
              <li key={index}>
                {income.source}: {income.amount} {income.date}
              </li>
            ))
          ) : (
            <p>No data </p>
          )}
        </ul>
      </div>
    </div>
  );
}
