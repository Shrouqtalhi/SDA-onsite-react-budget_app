import React, { useState } from "react";
import { User } from "../App";
import { userInfo } from "os";

type Prop = {
  userInfo: User[];
  setUserInfo: React.Dispatch<React.SetStateAction<User[]>>;
  getBalanceExpense: (amount: number) => void;
};
export default function Expense(prop: Prop) {
  type User = {
    source: string;
    amount: number;
    date: string;
  };
  const [userExpence, setUserExpence] = useState<User>({
    source: "",
    amount: 0,
    date: "",
  });

  // ===============================

  function getExpence(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserExpence({ ...userExpence, [name]: value });
  }
  function getExpenseAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setUserExpence({ ...userExpence, amount: Number(e.target.value) });
  }

  //   console.log(userInput);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userExpence.source && userExpence.amount && userExpence.date) {
      prop.setUserInfo([...prop.userInfo, userExpence]);
      prop.getBalanceExpense(userExpence.amount);
    }
  }
  // console.log(userInfo);
  return (
    <div>
      <div>
        <form className="form" onSubmit={onSubmitHandler}>
          <label>Expense source</label>
          <input
            type="text"
            onChange={getExpence}
            name="source"
            id="source"
            value={userExpence.source}
            required
          />
          <label>Amount of expense</label>
          <input
            type="number"
            onChange={getExpenseAmount}
            name="amount"
            id="amount"
            value={userExpence.amount}
            required
          />
          <label>Date of expense</label>
          <input
            type="date"
            onChange={getExpence}
            name="date"
            id="date"
            value={userExpence.date}
            required
          />
          <button>Add income</button>
        </form>
        <ul>
          {prop.userInfo.length > 0 ? (
            prop.userInfo.map((expence, index) => (
              <li
                key={index}
              >{`${expence.source}: ${expence.amount}EUR on ${expence.date}`}</li>
            ))
          ) : (
            <p>No Data for Incom</p>
          )}
        </ul>
      </div>
    </div>
  );
}
