function customCSVSplit(inputString) {
    const result = [];
    let currentField = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        if (char === ',' && !isInsideQuotes(inputString, i)) {
            result.push(currentField.trim());
            currentField = '';
        } else {
            currentField += char;
        }
    }

    result.push(currentField.trim()); // 添加最后一个字段

    return result;
}

// 检查逗号是否在引号内
function isInsideQuotes(str, index) {
    let insideQuotes = false;

    for (let i = 0; i < index; i++) {
        if (str[i] === '"') {
            insideQuotes = !insideQuotes;
        }
    }

    return insideQuotes;
}

module.exports = customCSVSplit;

