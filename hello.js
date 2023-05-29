function hello(){
    console.log("Hello, JavaScript World!");
}

function variable(){
    var user = "Mark";
    let age = 20;
    const fl = 4.3;
    console.log(user);
    console.log(`My name is ${user} and my age is ${age}`);
    console.log(typeof fi);
    // String,Number,Bollean,null,undefined,symbol
}

function str(){
    let s = "Hello world!";
    console.log(s.length);
    console.log(s.substring(0,5).toUpperCase());
    s = "huawei, google, apple, dji, tecent, ibm, intel, amd";
    console.log(s.split(', '));
}

function array(){
    const numbers = new Array(1,2,3,4,5);
    console.log(numbers);
    const fruits = ['apple','pear','watermelon'];
    fruits[3] = 'grape';
    fruits.push('mango');// add end
    console.log(fruits[3]);
    console.log(Array.isArray(fruits));
    console.log(fruits.indexOf('apple'));
}


function structure(){
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
}


function json(){
    const todos = [
        {
            id: 0,
            text: 'Power',
            isCompelet: true 
        },
        {
            id: 1,
            text: 'Reboot',
            isCompelet: true 
        },
        {
            id: 2,
            text: 'Close',
            isCompelet: false
        },
    ];
    


    const todosJSON = JSON.stringify(todos);
    console.log(todosJSON);

}


function loop(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }



    //while loop
    let zoo = 0;
    while(zoo < 10){
        console.log(`the loop number is ${zoo}`);
        zoo++;
    };

}

function ifs(){
    const zeus = 10;
    if(zeus === 10){
        console.log("zeus is 10.");
    } else if(zeus >10){
        console.log("zeus is greater than 10.");
    }else{
        console.log("zeus is less than 10.");
    }
}

const color = 'blue';
switch(color){
    case 'blue':
        console.log('color is blue.');
        break;
    case 'red':
        console.log('color is red.');
        break;
    case 'green':
        console.log('color is green.');
        break;
    default:
        console.log('color is NOT blue, red or green.');
        break;
}

function addNums(num1 = 12, num2 = 34){
    return num1 + num2;
}
console.log(addNums(23, 33));

function oop(){
    class Person{
        constructor(firstName, lastName, dob){
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = dob;
        }
        getBrithYear () {
            return this.dob.getFullYear();
        }
        getFullName () {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const person = new Person("Mark", "Chen", "2001-05-01")
}
