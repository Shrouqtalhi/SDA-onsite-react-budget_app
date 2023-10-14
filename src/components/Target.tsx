import React, { useState } from "react";

export default function Target() {
  const [target, setTarget] = useState(0);
  const [userInfo, setUserInfo] = useState(0);
  function getUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTarget(Number(e.target.value));
  }
  console.log();

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarget(0);
  }
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <label>Set target</label>
        <input
          type="number"
          onChange={getUserInput}
          name="amount"
          id="amount"
          value={target}
        />
        <button>Reset</button>
        <p>Current saving: 0</p>
        <p>Target: {target}</p>
        <p>Progress: 20</p>
        <progress max={2000} value={20} />
      </form>
    </div>
  );
}
