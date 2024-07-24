import React, { useState } from "react";
import BingoValueForm from "./BingoValueForm";
import BingoTickets from "./BingoTickets";
import "./App.css";

const App: React.FC = () => {
  const [values, setValues] = useState<string[]>([]);

  const addValue = (newValues: string[]) => {
    const uniqueNewValues = newValues.filter(
      (value) => !values.includes(value)
    );
    setValues([...values, ...uniqueNewValues]);
  };

  return (
    <div className="App">
      <div className="main-content">
        <h1>Bingo Ticket Generator</h1>
        <BingoValueForm onAddValue={addValue} />
        {values.length >= 30 && (
          <div className="tickets">
            <BingoTickets values={values} />
          </div>
        )}
      </div>
      {values.length > 0 && (
        <div className="sidebar">
          <p>
            {values.length} values added. You need at least 30 values to
            generate tickets.
          </p>
          <div className="values-list">
            <h2>Added Values:</h2>
            <ul>
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
