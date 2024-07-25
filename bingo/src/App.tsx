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

  const isValidValueCount = (count: number) => count % 5 === 0;

  return (
    <div className="App">
      <div className="main-content">
        <h1>Bingo Ticket Generator</h1>

        
          <div className="tickets">
            <BingoTickets values={values} />
          </div>
        
      </div>

      <div className="sidebar">
        <BingoValueForm onAddValue={addValue} />
        <h2>{values.length} values added.</h2>
        <p>
          You need at least 20 values in multiples of 5 to generate tickets.
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
    </div>
  );
};

export default App;
