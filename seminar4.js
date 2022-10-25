class Person {
    name;

    constructor(pname) {
        this.name = pname;
    }

    introduceSelf() {
        console.log(`Hi! My name is  ${this.name}`);
    }
}

class Teacher extends Person {
    subject;

    constructor(pName, pSubject) {
        super(pName);
        this.subject = pSubject;
    }

    introduceSelf() {
        console.log(`Hi! My name is ${this.name}, and I will be your ${this.subject} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * 10) + 1;
        console.log(grade);
    }
}

class Student extends Person {
    #year;

    static #count = 0;

    constructor(name, year) {
        super(name);
        this.#year = year;
        Student.#count++;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    set setYear(pYear) {
        if (pYear > 0)
            this.#year = pYear;
        else
            throw new Error("Year should be > 0");
    }

    get getYear() {
        return this.#year;
    }

    canStudyOOP() {
        return this.#year > 1;
    }

    static get count() {
        return Student.#count;
    }
}

const Andreea = new Person('Andreea')
Andreea.introduceSelf();

const Diana = new Teacher('Diana', 'Tehnologii web')
Diana.introduceSelf()
Diana.grade('test')

const Marius = new Student('Marius', 3);
Marius.introduceSelf();
console.log('Can study OOP? ' + Marius.canStudyOOP());

Student.prototype.whichYear = function () {
    console.log(`I am in year ${this.getYear}`);
}

Marius.whichYear();
Marius.setYear = 1;
Marius.whichYear();
console.log('Can study OOP? ' + Marius.canStudyOOP());

//Marius.setYear = 0; //throw new Error("")

console.log(Student.count)

const Daria = new Student('Daria', 2);
console.log(Student.count)

let text = new String("this sentence will be capitalized");

console.log(typeof text);
console.log(text);

//prototype pentru clasa String
String.prototype.capitalizeWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}

console.log(text.capitalizeWords());




let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2)
        resolve('SUCCESS')
    else
        reject('FAIL')
})

p
    .then((message) => {
        console.log("this is in the then: " + message)
    })
    .catch((message) => {
        console.log("this is in the catch: " + message)
    })


const fetch = require('node-fetch');

//fetch(url[, options]);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.text())
    .then(text => console.log(text))

fetch('http://dniodf.com/')
    .then(response => response.json())
    .then(json => {
        console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);
    })
    .catch(error => console.log("error"))

//const fetch = require('node-fetch');

//async function getData(url) {
//    let response = await fetch(url);
//    let text = await response.text();
//    return JSON.parse(text);
//}

//getData('https://jsonplaceholder.typicode.com/users')