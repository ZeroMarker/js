const XLSX = require('xlsx');
// npm install xlsx

// Load the Excel file
const workbook = XLSX.readFile('record.xlsx');

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert sheet to CSV
const csvData = XLSX.utils.sheet_to_csv(sheet);

// Function to wrap cell value in double quotes if it contains a comma
function wrapCellValue(cellValue) {
    if (cellValue.includes(',')) {
        return `"${cellValue}"`;
    }
    return cellValue;
}

// Process CSV data and handle commas in cell values
const lines = csvData.split('\n');
const formattedCSV = lines.map(line => line.split(',').map(wrapCellValue).join(',')).join('\n');

console.log(formattedCSV);
