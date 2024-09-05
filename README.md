# Bingo Ticket Generator

Bingo Ticket Generator is a dynamic web application built with React, enabling users to create and customize bingo tickets by adding unique values, generating multiple tickets, and exporting them as a PDF. This project provides a user-friendly interface for generating bingo tickets tailored to specific needs, with the ability to input custom values and preview the tickets in real-time before finalizing them. The final output can be exported as a PDF document.

## Features

- **Custom Value Input**: Add and manage custom values to be used in generating bingo tickets. Input can be single or multiple values separated by commas.
- **Generate Bingo Tickets**: Automatically generate bingo tickets using the custom values provided. The number of tickets can be adjusted according to preference.
- **Real-Time Preview**: View a live preview of the generated bingo tickets before finalizing the output, ensuring the layout meets specific requirements.
- **PDF Export**: Export the generated bingo tickets to a PDF document, making it easy to print or share the tickets.
- **Value Management**: Easily add, remove, and list all the bingo values. The application ensures that there are no duplicate values and provides a clear list of all added values.
- **Responsive Design**: The interface is designed to be responsive, ensuring usability across various devices and screen sizes.

## Technologies Used

- **React**: Frontend framework for building dynamic user interfaces.
- **Formik & Yup**: Used for managing form state and validation, ensuring robust and user-friendly input handling.
- **jsPDF**: Library for generating PDF documents, enabling the export of bingo tickets.
- **CSS**: Styling to enhance the visual appeal and usability of the application.
- **LocalStorage**: Optionally used for storing and retrieving user inputs locally in the browser for session persistence.

## How to Use

1. **Add Values**: Input single or multiple values in the provided field and click "Add Values" to add them to the pool.
2. **Generate Tickets**: Specify the number of tickets you want to generate and click "Generate Tickets". Ensure you have at least 20 values, and the number of values is a multiple of 5.
3. **Preview Tickets**: View the generated tickets in the real-time preview section.
4. **Export to PDF**: Click "Export to PDF" to download a PDF file containing the list of bingo values and the generated tickets.

## Demo

[Live demo](https://bingo-tickets.netlify.app/) 

## Getting Started

To get started with Bingo Ticket Generator, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/bingo-ticket-generator.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm start`

## Contributions

Contributions to Bingo Ticket Generator are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.
