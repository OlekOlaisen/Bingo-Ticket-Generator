import React, { useState } from "react";
import jsPDF from "jspdf";
import "./BingoTickets.css";

interface BingoTicketsProps {
  values: string[];
}

const BingoTickets: React.FC<BingoTicketsProps> = ({ values }) => {
  const [tickets, setTickets] = useState<string[][]>([]);
  const [numTickets, setNumTickets] = useState<number>(1);

  const generateTickets = () => {
    const newTickets = [];
    for (let i = 0; i < numTickets; i++) {
      const ticket = [...values].sort(() => 0.5 - Math.random()).slice(0, 25);
      newTickets.push(ticket);
    }
    setTickets(newTickets);
  };

  const exportToPDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [500, 500],
    });

    // Generate and shuffle the list of drawn values
    const shuffledValues = [...values].sort(() => Math.random() - 0.5);

    // Add front page with the list of drawn values
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.text("Drawn Values", 40, 40);

    doc.setFontSize(12);
    let yPosition = 60;
    shuffledValues.forEach((value, index) => {
      doc.text(`${index + 1}. ${value}`, 40, yPosition);
      yPosition += 15;
      if (yPosition > 740) {
        doc.addPage();
        yPosition = 40;
      }
    });

    // Add a new page for tickets
    doc.addPage();

    // Add tickets to the PDF
    tickets.forEach((ticket, index) => {
      if (index > 0) doc.addPage();

      doc.setFontSize(16);
      doc.setTextColor(40);
      doc.text(`Ticket ${index + 1}`, 40, 40);

      const cellSize = 80;
      const startX = 40;
      const startY = 60;

      ticket.forEach((value, i) => {
        const x = startX + (i % 5) * cellSize;
        const y = startY + Math.floor(i / 5) * cellSize;

        doc.setDrawColor(0, 0, 255); // Border color
        doc.setFillColor(240, 240, 240); // Background color
        doc.rect(x, y, cellSize, cellSize, "FD"); // Draw filled rectangle

        doc.setTextColor(0, 0, 0); // Text color
        doc.setFontSize(14);
        doc.text(value, x + cellSize / 2, y + cellSize / 2, {
          align: "center",
          baseline: "middle",
        });
      });
    });

    doc.save("bingo-tickets.pdf");
  };

  return (
    <div>
      <label>
        Number of Tickets:
        <input
          type="number"
          value={numTickets}
          onChange={(e) => setNumTickets(parseInt(e.target.value, 10))}
          min="1"
        />
      </label>
      <button onClick={generateTickets} disabled={values.length < 30}>
        Generate Tickets
      </button>
      <button onClick={exportToPDF} disabled={tickets.length === 0}>
        Export to PDF
      </button>
      {values.length < 30 && (
        <p>You need at least 30 values to generate tickets.</p>
      )}
      <div className="tickets">
        {tickets.map((ticket, index) => (
          <div key={index}>
            <h3>Ticket {index + 1}</h3>
            <div className="ticket">
              {ticket.map((value, i) => (
                <div key={i}>{value}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoTickets;
