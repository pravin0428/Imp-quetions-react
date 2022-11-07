import React from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Clock label="24 Hour live componet clock" />
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
