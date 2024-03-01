const customCSVSplit = require('./split.js');
function csvToArray(csv) {
    // Splitting the string based on LF, CR, or CRLF line endings
    const lines = csv.split(/\r\n|\r|\n/);
    const headers = lines[0].split(',');

    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        //const currentLine = lines[i].match(/(?:[^\s",]+|"[^"]*(?:""[^"]*)*")/g);
        //const currentLine = lines[i].match(/(?:[^",]+|"[^"]*(?:""[^"]*)*")/g);
        const currentLine = customCSVSplit(lines[i])
        for (let j = 0; j < headers.length; j++) {
            // 如果字段值包含引号，则去除引号
            const cleanedValue = currentLine[j] ? 
                currentLine[j]
                    .replace(/"/g, '')
                    .split(',')
                    .map(value => value.trim())
                    .filter(value => value !== '')
                : "";
            obj[headers[j]] = cleanedValue;
        }
        result.push(obj);
    }

    return result;
}

module.exports = csvToArray;