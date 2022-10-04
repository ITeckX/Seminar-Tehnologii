var number = 1;
let bool = true;
const string = "HELLO";

let obj = {
    key: "object"
}

var d = function datatype () {
    return true;
}

console.log("Must be number: ", typeof number);
console.log("Must be boolean: ", typeof bool);
console.log("Must be string: ", typeof string);
console.log("Must be object: ", typeof obj);
console.log("Must be function: ", typeof d);

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);

var sayHello = function (name) {
    return "Hello, " + name;
}

console.log(sayHello("me"));
var sayHello = (name) => {
    return "Hello, " + name;
}

console.log(sayHello("me"));
var sayHello = (name) => "Hello, " + name;

console.log(sayHello("me"));
var sayHello = (name) => "Hello, " + name;

console.log(sayHello(process.argv[2]));

const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"
var sirTest=["This", "is", "a", "test"];
console.log(sirTest.join(' '))

function checkDivisible (n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

function occurences(text, character){
    return text.split(character).length - 1;
}

console.log(occurences("sample text", "e"));

var evenBois=[];
function even (input) {
for(var i=0;i<input.length;i++) if(input[i]%2==0)evenBois.push(input[i])
}

even([2,4,6,7,8])
console.log(evenBois);