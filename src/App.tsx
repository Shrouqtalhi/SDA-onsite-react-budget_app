import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Target from "./components/Target";
import Transfer from "./components/Transfer";
export type User = {
  source: string;
  amount: number;
  date: string;
};
function App() {
  // const [userInput, setUserInput] = useState("");
  const [incomeInfo, setincomeInfo] = useState<User[]>([]);
  const [expeneInfo, setExpenseInfo] = useState<User[]>([]);
  const [transfer, setTransfer] = useState(0);

  const [balance, setBalance] = useState(0);

  console.log(incomeInfo);

  function getBalanceIncome(amount: number) {
    // const sumIncome = incomeInfo.reduce((x, y) => x + y.amount, 0);
    // const sumExpense = expeneInfo.reduce((x, y) => x + y.amount, 0);
    // setBalance(sumIncome - sumExpense);
    setBalance(balance + amount);
  }

  function getBalanceExpense(amount: number) {
    // const sumIncome = incomeInfo.reduce((x, y) => x + y.amount, 0);
    // const sumExpense = expeneInfo.reduce((x, y) => x + y.amount, 0);
    setBalance(balance - amount);
  }

  console.log(balance);

  return (
    <div className="App">
      <Income
        getBalanceIncome={getBalanceIncome}
        userInfo={incomeInfo}
        setUserInfo={setincomeInfo}
      />
      <Expense
        getBalanceExpense={getBalanceExpense}
        userInfo={expeneInfo}
        setUserInfo={setExpenseInfo}
      />
      <Target />
      <Transfer
        balance={balance}
        transfer={transfer}
        setTransfer={setTransfer}
      />
    </div>
  );
}

export default App;
