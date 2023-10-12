import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Target from "./components/Target";

function App() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <Income />
      <Expense />
      <Target />
    </div>
  );
}

export default App;
