const fs = require('fs');
const exp = require('./export.js');
const csvToArray = require('./csv.js');

// Replace 'yourfile.csv' with the actual path to your CSV file
const filePath = 'json.csv';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const dataArray = csvToArray(data);
    console.log(dataArray);
    exp("out.json",dataArray);
});



