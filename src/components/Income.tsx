import React, { useState } from "react";

export default function Income() {
  type User = {
    source: string;
    amount: number;
    date: string;
  };
  const [userIncome, setUserIncome] = useState<User>({
    source: "",
    amount: 0,
    date: "",
  });

  const [userInfo, setUserInfo] = useState<User[]>([]);

  // ==================================

  function getIncome(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserIncome({ ...userIncome, [name]: value });
  }
  //   console.log(userInput);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (userIncome.source && userIncome.amount && userIncome.date) {
      setUserInfo([...userInfo, userIncome]);
    }
  }
  console.log(userInfo);
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
            onChange={getIncome}
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
          {userInfo.length > 0 ? (
            userInfo.map((Income, index) => (
              <li
                key={index}
              >{`${Income.source}: ${Income.amount}EUR on ${Income.date}`}</li>
            ))
          ) : (
            <p>No data </p>
          )}
        </ul>
      </div>
    </div>
  );
}
