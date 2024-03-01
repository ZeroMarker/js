const fs = require('fs');

// Your data to export
const dataToExport = [
  { name: 'Mark', age: 30 },
  { name: 'Marc', age: 25 },
  { name: 'Alina Chen', age: 28 }
];

function exp(filePath, dataToExport) {
  const jsonData = JSON.stringify(dataToExport, null, 2);
  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
      return;
    }
    console.log('Data has been written to', filePath);
  });
}

module.exports = exp;