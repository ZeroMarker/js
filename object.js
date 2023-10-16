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