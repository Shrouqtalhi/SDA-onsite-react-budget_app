import React, { useState } from "react";

export default function Target() {
  const [userInput, setUserInput] = useState(0);
  const [userInfo, setUserInfo] = useState(0);
  function getUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(Number(e.target.value));
  }
  console.log();

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUserInfo(userInput);
  }
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <label>Set target</label>
        <input type="number" onChange={getUserInput} />
        <button>Reset</button>
        <p>Current saving: 0</p>
        <p>Target: {userInfo}</p>
        <p>Progress: 0%</p>
      </form>
    </div>
  );
}
