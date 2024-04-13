import { add } from "./math";


// 1. Static Typing
let myNumber: number = 10;
let myString: string = "Hello, TypeScript!";

// 2. Interfaces
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 25 };

// 3. Classes
class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

let myDog = new Dog("Buddy");
myDog.makeSound();

// 4. Enums
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;

// 5. Generics
function identity<T>(arg: T): T {
  return arg;
}

let result: number = identity<number>(5);

// 6. Modules
// math.ts


// main.ts
let sum = add(3, 5);

console.log(myNumber);
console.log(myString);
console.log(person);
console.log(myDog);
console.log(myColor);
console.log(result);
console.log(sum);
