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

console.log('Check divisible 10, 2 '+checkDivisible(10, 2))
console.log('Check divisible 10, 3 '+checkDivisible(10, 3))

function occurences(text, character){
    return text.split(character).length - 1;
}

console.log(occurences("sample text", "e"));

var evenBois=[];
function even() {
    let args = arguments;
    for (var i = 0; i < args[0].length; i++)
        if (args[0][i] % 2 == 0)
            evenBois.push(args[0][i])
}

even([2,4,6,7,8])
console.log(evenBois);
evenBois = [];
even([2, 5, 6, 7]);
console.log(evenBois);
evenBois = [];
even([2, 5, 6, 7,9,10]);
console.log(evenBois);
evenBois = [];
even([2]);
console.log(evenBois);


//console.log(3 == '3');
//console.log(3 === '3');

/*console.log(true + true + true == 3);*/
const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

if (process.argv.lengh < 3) {
    console.log('not enough params')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
    console.log(day);
    console.log(days[day]);
}
console.log()
for (var day of days) {
    console.log(day);
}

function getFrequency() {
    let args = arguments;
    let words = [];
    let frequency = [];
    let text = args[0].split(' ');
    for (var word in text) {
        if (words.includes(text[word])==false) {
            words.push(text[word]);
            frequency[words.indexOf(text[word])] = 1;
        }
        else {
            frequency[words.indexOf(text[word])]++;
        }
    }
    for (var i = 0; i < words.length; i++) {
        console.log(words[i] + ': ' + frequency[i]);
    }
}
var temp = "the quick brown fox jumps over the lazy dog";
getFrequency("the quick brown fox jumps over the lazy dog");

//Date.prototype.addDays = function (days) {
//    var dat = new Date(this.valueOf());
//    dat.setDate(dat.getDate() + days);
//    this.setTime(dat.getTime());
//}

//function getDates(startDate, stopDate) {
//    var dateArray = new Array();
//    startDate.setHours(0, 0, 0, 0);
//    stopDate.setHours(0, 0, 0, 0);
//    console.log(stopDate);
//    var currentDate = startDate;
  
//    while (currentDate <= stopDate) {
//      var curr = new Date();
//      curr.setTime(currentDate.getTime());
//      dateArray.push(curr);
//      currentDate.addDays(1);
//    }
//    return dateArray;
//}
//console.log('test');
//var dateArr = getDates(new Date(), new Date('11/20/2022'));

//console.log(dateArr);
