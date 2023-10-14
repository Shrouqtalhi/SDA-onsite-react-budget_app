import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Target from "./components/Target";
import Transfer from "./components/Transfer";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <Income />
      <Expense />
      <Target />
      <Transfer />
    </div>
  );
}

export default App;
