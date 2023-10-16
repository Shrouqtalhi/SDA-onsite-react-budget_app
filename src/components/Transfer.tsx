import { useState } from "react";

type Prop = {
  transfer: number;
  balance: number;
  setTransfer: React.Dispatch<React.SetStateAction<number>>;
};
export default function Transfer(prop: Prop) {
  // const [saving, setSaving] = useState(0);
  function getUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    prop.setTransfer(Number(e.target.value));
  }
  console.log();

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    prop.setTransfer(0);
  }
  return (
    <div>
      <p>Current balance:{prop.balance}</p>
      <form className="form" onSubmit={onSubmitHandler}>
        <label>Transfer to saving account</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={getUserInput}
          value={prop.transfer}
        />
        <button>Transfer</button>
      </form>
    </div>
  );
}
