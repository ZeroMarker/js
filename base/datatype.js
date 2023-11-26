const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple','pear','watermelon'];
fruits[3] = 'grape';
fruits.push('mango');// add end
console.log(fruits[3]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('apple'));