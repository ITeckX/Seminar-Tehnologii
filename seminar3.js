//const words = [
//    "fox",
//    "wolf",
//    "snake",
//    "crocodile",
//    "lion",
//    "cat",
//    "crocodile",
//    "horse"
//];

//const forbiddenWord = "crocodile";
//const minLength = 4;

//const filterWords1 = (words, forbiddenWord, minLength) => {
//    const result = words.filter((word) => {
//        if (word !== forbiddenWord && word.length >= minLength) {
//            return true;
//        }
//        return false;
//    });
//    return result;
//};

//console.log(filterWords1(words, forbiddenWord, minLength));
//// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

//const filterWords2 = (words, forbiddenWord, minLength) =>
//    words.filter((word) => {
//        if (word !== forbiddenWord && word.length >= minLength) {
//            return true;
//        }
//        return false;
//    });

//console.log(filterWords2(words, forbiddenWord, minLength));
//// expected output: Array [ 'wolf', 'snake', 'lion', 'horse' ]

//const array1 = [1, 4, 9, 16];

//const map1 = array1.map(x => x * 2);

//console.log(map1);
//// expected output: Array [2, 8, 18, 32]

const squareDimensions = [3, 5, 12, 3, 5, 3];

const getTotalArea1 = (squareDimensions) => {
    return squareDimensions
        .map((side) => {
            return side * side;
        })
}

console.log(getTotalArea1(squareDimensions));

const getTotalArea2 = (squareDimensions) => {
    return squareDimensions
        .map((side) => {
            return side * side;
        })
        .reduce((prev, current) => {
            return prev + current;
        }, 0);
}

console.log(getTotalArea2(squareDimensions));

const getTotalArea3 = (squareDimensions) =>
    squareDimensions
        .map((side) => side * side)
        .reduce((prev, current) => prev + current, 0);

console.log(getTotalArea3(squareDimensions));

const formatString = (s, ...format) => {
    let modified = s;
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i]);
        }
    }
    return modified;
}

console.log(formatString("This is a {0} string and we've {1} it", 'nice', 'formatted'));

const formatString2 = (s,substantiv,adjectiv) => {
    let modified = s;
    if (modified.indexOf('{substantiv}') != -1)
        modified = modified.replace('{substantiv}', substantiv);
    if (modified.indexOf('{adjectiv}') != -1)
        modified = modified.replace('{adjectiv}', adjectiv);
    return modified;
}

console.log(formatString2("un {substantiv} este {adjectiv}", 'calut', 'dragut'));

const laptops = [
    {
        brand: "HP",
        processor: "i5",
        ram: 8
    },
    {
        brand: "Lenovo",
        processor: "i5",
        ram: 16
    },
    {
        brand: "Acer",
        processor: "i5",
        ram: 8
    },
    {
        brand: "Asus",
        processor: "i7",
        ram: 8
    }
];

const getFilteredObjects = (array, object) => {
    return array.filter((element) => {
        let result = false;
        Object.keys(object).forEach(key => {
            if (!element[key] || element[key] !== object[key]) {
                result = true;
            }
        })
        return result;
    })
};

const result = getFilteredObjects(laptops, { processor: "i5", ram: 8 });
console.log(result);
/*expected result Array[
  { brand: 'Lenovo', processor: 'i5', ram: 16 },
  { brand: 'Asus', processor: 'i7', ram: 8 }
]*/