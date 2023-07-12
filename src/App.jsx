import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ToDoList from "./assets/components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}
export default App;
