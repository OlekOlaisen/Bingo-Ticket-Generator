<h1 align="center">Bingo Ticket Generator</h1>

Bingo Ticket Generator is a React web application that allows users to generate and export bingo tickets using a list of user-defined values. The application ensures all added values are unique and enables the generation of bingo tickets with 25 values each. Users can also export the generated tickets to a PDF file.

## Features

The application has the following features:
- Add single or multiple values (comma-separated)
- Ensure unique values
- Generate bingo tickets with 25 values each
- Export generated tickets to a PDF file
- User-friendly interface

## Technologies Used

The following technologies were used to develop this application:
- React
- TypeScript
- Formik and Yup for form management and validation
- jsPDF for PDF generation

## Minimum Viable Product (MVP)

The MVP for this project is a functioning web application that allows users to:
- Add values
- Generate bingo tickets
- Export the tickets to a PDF file

## Installation

To install the application, you can clone the repository from GitHub:
- `git clone https://github.com/yourusername/bingo-ticket-generator.git`
- Navigate to the project directory: `cd bingo-ticket-generator`
- Install dependencies: `npm install`
- Start the application: `npm start`

## Usage

1. **Add Values**: Enter single or multiple values separated by commas in the input field and click "Add Values". Ensure you add at least 20 values in multiples of 5.
2. **Generate Tickets**: Set the number of tickets you want to generate and click "Generate Tickets".
3. **Export to PDF**: Click "Export to PDF" to save the generated tickets as a PDF file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
