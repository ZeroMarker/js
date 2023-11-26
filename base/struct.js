const person = {
    firstName : 'hongliang',
    lastName : 'chen',
    age : 30,
    hobbies :['movies','sports'],
    address : {
        street : 'fifth street',
        city : 'linyi',
        state : 'shandong'
    }
}
console.log(person.address);

//destructing ES6
const { firstName, address: { city}} = person;
console.log(city);
person.email = 'mark@gmail.com';
console.log(person);