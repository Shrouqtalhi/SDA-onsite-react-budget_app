import { useState } from "react";

export default function Transfer() {
  const [transfer, setTransfer] = useState(0);
  function getUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTransfer(Number(e.target.value));
  }
  console.log();

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTransfer(0);
  }
  return (
    <div>
      <p>Current balance:0</p>
      <form className="form" onSubmit={onSubmitHandler}>
        <label>Transfer to saving account</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={getUserInput}
          value={transfer}
        />
        <button>Transfer</button>
      </form>
    </div>
  );
}
