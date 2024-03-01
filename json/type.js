function determineFieldType(value) {
    if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'string') {
        return 'string';
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (typeof value === 'object' && value !== null) {
        return 'object';
    } else {
        return 'unknown';
    }
}

// 示例
const fieldValue1 = 1;
const fieldValue2 = [2, 3, 4];
const fieldValue3 = { key: 'value' };
const fieldValue4 = 'text';

console.log('Field 1 type:', determineFieldType(fieldValue1));
console.log('Field 2 type:', determineFieldType(fieldValue2));
console.log('Field 3 type:', determineFieldType(fieldValue3));
console.log('Field 4 type:', determineFieldType(fieldValue4));
