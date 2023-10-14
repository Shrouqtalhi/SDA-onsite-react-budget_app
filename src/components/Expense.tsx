import React, { useState } from "react";

export default function Expense() {
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

  const [userInfo, setUserInfo] = useState<User[]>([]);

  // ===============================

  function getExpence(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserExpence({ ...userExpence, [name]: value });
  }

  //   console.log(userInput);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userExpence.source && userExpence.amount && userExpence.date) {
      setUserInfo([...userInfo, userExpence]);
    }
  }
  console.log(userInfo);
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
            onChange={getExpence}
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
          {userInfo.length > 0 ? (
            userInfo.map((expence, index) => (
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
